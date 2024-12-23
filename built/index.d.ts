import { type Endpoints } from './api.types.js';
import Stream, { Connection } from './streaming.js';
import { type Channels } from './streaming.types.js';
import { type Acct } from './acct.js';
export type { Endpoints, Channels, Acct, };
export { Stream, Connection as ChannelConnection, };
export declare const permissions: readonly ["read:account", "write:account", "read:blocks", "write:blocks", "read:drive", "write:drive", "read:favorites", "write:favorites", "read:following", "write:following", "read:messaging", "write:messaging", "read:mutes", "write:mutes", "write:notes", "read:notifications", "write:notifications", "read:reactions", "write:reactions", "write:votes", "read:pages", "write:pages", "write:page-likes", "read:page-likes", "read:user-groups", "write:user-groups", "read:channels", "write:channels", "read:flash", "write:flash", "read:flash-likes", "write:flash-likes", "write:admin:delete-account", "write:admin:delete-all-files-of-a-user", "read:admin:index-stats", "read:admin:table-stats", "read:admin:user-ips", "read:admin:meta", "write:admin:reset-password", "write:admin:send-email", "read:admin:server-info", "read:admin:show-user", "write:admin:suspend-user", "write:admin:unset-user-avatar", "write:admin:unset-user-banner", "write:admin:unsuspend-user", "write:admin:meta", "write:admin:user-note", "write:admin:roles", "read:admin:roles", "write:admin:relays", "read:admin:relays", "write:admin:invite-codes", "read:admin:invite-codes", "write:admin:federation", "write:admin:account", "read:admin:account", "write:admin:emoji", "read:admin:emoji", "write:admin:queue", "read:admin:queue", "write:admin:promo", "write:admin:drive", "read:admin:drive", "write:admin:ad", "read:admin:ad", "write:invite-codes", "read:invite-codes", "write:clip-favorite", "read:clip-favorite", "read:federation"];
export declare const notificationTypes: readonly ["note", "follow", "mention", "reply", "renote", "quote", "reaction", "pollEnded", "receiveFollowRequest", "followRequestAccepted", "app", "roleAssigned"];
export declare const noteVisibilities: readonly ["public", "home", "followers", "specified"];
export declare const mutedNoteReasons: readonly ["word", "manual", "spam", "other"];
export declare const followingVisibilities: readonly ["public", "followers", "private"];
export declare const followersVisibilities: readonly ["public", "followers", "private"];
import * as api from './api.js';
import * as entities from './entities.js';
import * as acct from './acct.js';
import * as note from './note.js';
export { api, entities, acct, note };
//# sourceMappingURL=index.d.ts.map