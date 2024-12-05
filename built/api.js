import "./autogen/apiClientJSDoc.js";
import { endpointReqTypes } from "./autogen/endpoint.js";
const MK_API_ERROR = Symbol();
function isAPIError(reason) {
  return reason[MK_API_ERROR] === true;
}
class APIClient {
  origin;
  credential;
  fetch;
  constructor(opts) {
    this.origin = opts.origin;
    this.credential = opts.credential;
    this.fetch = opts.fetch ?? ((...args) => fetch(...args));
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  assertIsRecord(obj) {
    return obj !== null && typeof obj === "object" && !Array.isArray(obj);
  }
  assertSpecialEpReqType(ep) {
    return ep in endpointReqTypes;
  }
  request(endpoint, params = {}, credential) {
    return new Promise((resolve, reject) => {
      let mediaType = "application/json";
      if (this.assertSpecialEpReqType(endpoint) && endpointReqTypes[endpoint] != null) {
        mediaType = endpointReqTypes[endpoint];
      }
      let payload = "{}";
      if (mediaType === "application/json") {
        payload = JSON.stringify({
          ...params,
          i: credential !== void 0 ? credential : this.credential
        });
      } else if (mediaType === "multipart/form-data") {
        payload = new FormData();
        const i = credential !== void 0 ? credential : this.credential;
        if (i != null) {
          payload.append("i", i);
        }
        if (this.assertIsRecord(params)) {
          for (const key in params) {
            const value = params[key];
            if (value == null) continue;
            if (value instanceof File || value instanceof Blob) {
              payload.append(key, value);
            } else if (typeof value === "object") {
              payload.append(key, JSON.stringify(value));
            } else {
              payload.append(key, value);
            }
          }
        }
      }
      this.fetch(`${this.origin}/api/${endpoint}`, {
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": mediaType
        },
        credentials: "omit",
        cache: "no-cache"
      }).then(async (res) => {
        const body = res.status === 204 ? null : await res.json();
        if (res.status === 200 || res.status === 204) {
          resolve(body);
        } else {
          reject({
            [MK_API_ERROR]: true,
            ...body.error
          });
        }
      }).catch(reject);
    });
  }
}
export {
  APIClient,
  isAPIError
};
//# sourceMappingURL=api.js.map
