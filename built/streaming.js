import { EventEmitter } from "eventemitter3";
import _ReconnectingWebsocket from "reconnecting-websocket";
const ReconnectingWebsocket = _ReconnectingWebsocket;
function urlQuery(obj) {
  const params = Object.entries(obj).filter(([, v]) => Array.isArray(v) ? v.length : v !== void 0).reduce((a, [k, v]) => (a[k] = v, a), {});
  return Object.entries(params).map((e) => `${e[0]}=${encodeURIComponent(e[1])}`).join("&");
}
class Stream extends EventEmitter {
  stream;
  state = "initializing";
  sharedConnectionPools = [];
  sharedConnections = [];
  nonSharedConnections = [];
  idCounter = 0;
  constructor(origin, user, options) {
    super();
    this.genId = this.genId.bind(this);
    this.useChannel = this.useChannel.bind(this);
    this.useSharedConnection = this.useSharedConnection.bind(this);
    this.removeSharedConnection = this.removeSharedConnection.bind(this);
    this.removeSharedConnectionPool = this.removeSharedConnectionPool.bind(this);
    this.connectToChannel = this.connectToChannel.bind(this);
    this.disconnectToChannel = this.disconnectToChannel.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onMessage = this.onMessage.bind(this);
    this.send = this.send.bind(this);
    this.close = this.close.bind(this);
    options = options ?? {};
    const query = urlQuery({
      i: user?.token,
      // To prevent cache of an HTML such as error screen
      _t: Date.now()
    });
    const wsOrigin = origin.replace("http://", "ws://").replace("https://", "wss://");
    this.stream = new ReconnectingWebsocket(`${wsOrigin}/streaming?${query}`, "", {
      minReconnectionDelay: 1e3,
      // https://github.com/pladaria/reconnecting-websocket/issues/91
      WebSocket: options.WebSocket
    });
    this.stream.addEventListener("open", this.onOpen);
    this.stream.addEventListener("close", this.onClose);
    this.stream.addEventListener("message", this.onMessage);
  }
  genId() {
    return (++this.idCounter).toString();
  }
  useChannel(channel, params, name) {
    if (params) {
      return this.connectToChannel(channel, params);
    } else {
      return this.useSharedConnection(channel, name);
    }
  }
  useSharedConnection(channel, name) {
    let pool = this.sharedConnectionPools.find((p) => p.channel === channel);
    if (pool == null) {
      pool = new Pool(this, channel, this.genId());
      this.sharedConnectionPools.push(pool);
    }
    const connection = new SharedConnection(this, channel, pool, name);
    this.sharedConnections.push(connection);
    return connection;
  }
  removeSharedConnection(connection) {
    this.sharedConnections = this.sharedConnections.filter((c) => c !== connection);
  }
  removeSharedConnectionPool(pool) {
    this.sharedConnectionPools = this.sharedConnectionPools.filter((p) => p !== pool);
  }
  connectToChannel(channel, params) {
    const connection = new NonSharedConnection(this, channel, this.genId(), params);
    this.nonSharedConnections.push(connection);
    return connection;
  }
  disconnectToChannel(connection) {
    this.nonSharedConnections = this.nonSharedConnections.filter((c) => c !== connection);
  }
  /**
   * Callback of when open connection
   */
  onOpen() {
    const isReconnect = this.state === "reconnecting";
    this.state = "connected";
    this.emit("_connected_");
    if (isReconnect) {
      for (const p of this.sharedConnectionPools) p.connect();
      for (const c of this.nonSharedConnections) c.connect();
    }
  }
  /**
   * Callback of when close connection
   */
  onClose() {
    if (this.state === "connected") {
      this.state = "reconnecting";
      this.emit("_disconnected_");
    }
  }
  /**
   * Callback of when received a message from connection
   */
  onMessage(message) {
    const { type, body } = JSON.parse(message.data);
    if (type === "channel") {
      const id = body.id;
      let connections;
      connections = this.sharedConnections.filter((c) => c.id === id);
      if (connections.length === 0) {
        const found = this.nonSharedConnections.find((c) => c.id === id);
        if (found) {
          connections = [found];
        }
      }
      for (const c of connections) {
        c.emit(body.type, body.body);
        c.inCount++;
      }
    } else {
      this.emit(type, body);
    }
  }
  send(typeOrPayload, payload) {
    if (typeof typeOrPayload === "string") {
      this.stream.send(JSON.stringify({
        type: typeOrPayload,
        ...payload === void 0 ? {} : { body: payload }
      }));
      return;
    }
    this.stream.send(JSON.stringify(typeOrPayload));
  }
  ping() {
    this.stream.send("ping");
  }
  heartbeat() {
    this.stream.send("h");
  }
  reconnect() {
    this.stream.reconnect();
  }
  /**
   * Close this connection
   */
  close() {
    this.stream.close();
  }
}
class Pool {
  channel;
  id;
  stream;
  users = 0;
  disposeTimerId = null;
  isConnected = false;
  constructor(stream, channel, id) {
    this.onStreamDisconnected = this.onStreamDisconnected.bind(this);
    this.inc = this.inc.bind(this);
    this.dec = this.dec.bind(this);
    this.connect = this.connect.bind(this);
    this.disconnect = this.disconnect.bind(this);
    this.channel = channel;
    this.stream = stream;
    this.id = id;
    this.stream.on("_disconnected_", this.onStreamDisconnected);
  }
  onStreamDisconnected() {
    this.isConnected = false;
  }
  inc() {
    if (this.users === 0 && !this.isConnected) {
      this.connect();
    }
    this.users++;
    if (this.disposeTimerId) {
      clearTimeout(this.disposeTimerId);
      this.disposeTimerId = null;
    }
  }
  dec() {
    this.users--;
    if (this.users === 0) {
      this.disposeTimerId = setTimeout(() => {
        this.disconnect();
      }, 3e3);
    }
  }
  connect() {
    if (this.isConnected) return;
    this.isConnected = true;
    this.stream.send("connect", {
      channel: this.channel,
      id: this.id
    });
  }
  disconnect() {
    this.stream.off("_disconnected_", this.onStreamDisconnected);
    this.stream.send("disconnect", { id: this.id });
    this.stream.removeSharedConnectionPool(this);
  }
}
class Connection extends EventEmitter {
  channel;
  stream;
  name;
  // for debug
  inCount = 0;
  // for debug
  outCount = 0;
  // for debug
  constructor(stream, channel, name) {
    super();
    this.send = this.send.bind(this);
    this.stream = stream;
    this.channel = channel;
    if (name !== void 0) {
      this.name = name;
    }
  }
  send(type, body) {
    this.stream.send("ch", {
      id: this.id,
      type,
      body
    });
    this.outCount++;
  }
}
class SharedConnection extends Connection {
  pool;
  get id() {
    return this.pool.id;
  }
  constructor(stream, channel, pool, name) {
    super(stream, channel, name);
    this.dispose = this.dispose.bind(this);
    this.pool = pool;
    this.pool.inc();
  }
  dispose() {
    this.pool.dec();
    this.removeAllListeners();
    this.stream.removeSharedConnection(this);
  }
}
class NonSharedConnection extends Connection {
  id;
  params;
  constructor(stream, channel, id, params) {
    super(stream, channel);
    this.connect = this.connect.bind(this);
    this.dispose = this.dispose.bind(this);
    this.params = params;
    this.id = id;
    this.connect();
  }
  connect() {
    this.stream.send("connect", {
      channel: this.channel,
      id: this.id,
      params: this.params
    });
  }
  dispose() {
    this.removeAllListeners();
    this.stream.send("disconnect", { id: this.id });
    this.stream.disconnectToChannel(this);
  }
}
export {
  Connection,
  Stream as default,
  urlQuery
};
//# sourceMappingURL=streaming.js.map
