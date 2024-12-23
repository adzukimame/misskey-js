import { EventEmitter } from 'eventemitter3';
import type { BroadcastEvents, Channels } from './streaming.types.js';
export declare function urlQuery(obj: Record<string, string | number | boolean | undefined>): string;
type AnyOf<T extends Record<PropertyKey, unknown>> = T[keyof T];
type StreamEvents = {
    _connected_: void;
    _disconnected_: void;
} & BroadcastEvents;
export default class Stream extends EventEmitter<StreamEvents> {
    private stream;
    state: 'initializing' | 'reconnecting' | 'connected';
    private sharedConnectionPools;
    private sharedConnections;
    private nonSharedConnections;
    private idCounter;
    constructor(origin: string, user: {
        token: string;
    } | null, options?: {
        WebSocket?: WebSocket;
    });
    private genId;
    useChannel<C extends keyof Channels>(channel: C, params?: Channels[C]['params'], name?: string): Connection<Channels[C]>;
    private useSharedConnection;
    removeSharedConnection(connection: SharedConnection): void;
    removeSharedConnectionPool(pool: Pool): void;
    private connectToChannel;
    disconnectToChannel(connection: NonSharedConnection): void;
    private onOpen;
    private onClose;
    private onMessage;
    send(typeOrPayload: string): void;
    send(typeOrPayload: string, payload: unknown): void;
    send(typeOrPayload: Record<string, unknown> | unknown[]): void;
    ping(): void;
    heartbeat(): void;
    reconnect(): void;
    close(): void;
}
declare class Pool {
    channel: string;
    id: string;
    protected stream: Stream;
    users: number;
    private disposeTimerId;
    private isConnected;
    constructor(stream: Stream, channel: string, id: string);
    private onStreamDisconnected;
    inc(): void;
    dec(): void;
    connect(): void;
    private disconnect;
}
export declare abstract class Connection<Channel extends AnyOf<Channels> = AnyOf<Channels>> extends EventEmitter<Channel['events']> {
    channel: string;
    protected stream: Stream;
    abstract id: string;
    name?: string;
    inCount: number;
    outCount: number;
    constructor(stream: Stream, channel: string, name?: string);
    send<T extends keyof Channel['receives']>(type: T, body: Channel['receives'][T]): void;
    abstract dispose(): void;
}
declare class SharedConnection<Channel extends AnyOf<Channels> = AnyOf<Channels>> extends Connection<Channel> {
    private pool;
    get id(): string;
    constructor(stream: Stream, channel: string, pool: Pool, name?: string);
    dispose(): void;
}
declare class NonSharedConnection<Channel extends AnyOf<Channels> = AnyOf<Channels>> extends Connection<Channel> {
    id: string;
    protected params: Channel['params'];
    constructor(stream: Stream, channel: string, id: string, params: Channel['params']);
    connect(): void;
    dispose(): void;
}
export {};
//# sourceMappingURL=streaming.d.ts.map