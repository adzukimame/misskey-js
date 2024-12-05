import './autogen/apiClientJSDoc.js';
export type { SwitchCaseResponseType, } from './api.types.js';
export type APIError = {
    id: string;
    code: string;
    message: string;
    kind: 'client' | 'server';
    info: Record<string, any>;
};
export declare function isAPIError(reason: Record<PropertyKey, unknown>): reason is APIError;
export type FetchLike = (input: string, init?: {
    method?: string;
    body?: Blob | FormData | string;
    credentials?: RequestCredentials;
    cache?: RequestCache;
    headers: {
        [key in string]: string;
    };
}) => Promise<{
    status: number;
    json(): Promise<any>;
}>;
export declare class APIClient {
    origin: string;
    credential: string | null | undefined;
    fetch: FetchLike;
    constructor(opts: {
        origin: APIClient['origin'];
        credential?: APIClient['credential'];
        fetch?: APIClient['fetch'] | null | undefined;
    });
    private assertIsRecord;
    private assertSpecialEpReqType;
}
//# sourceMappingURL=api.d.ts.map