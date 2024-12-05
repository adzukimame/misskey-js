type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
type OneOf<T extends any[]> = T extends [infer Only] ? Only : T extends [infer A, infer B, ...infer Rest] ? OneOf<[XOR<A, B>, ...Rest]> : never;
export type paths = {
    '/admin/meta': {
        post: operations['admin___meta'];
    };
    '/admin/accounts/create': {
        post: operations['admin___accounts___create'];
    };
    '/admin/accounts/delete': {
        post: operations['admin___accounts___delete'];
    };
    '/admin/accounts/find-by-email': {
        post: operations['admin___accounts___find-by-email'];
    };
    '/admin/avatar-decorations/create': {
        post: operations['admin___avatar-decorations___create'];
    };
    '/admin/avatar-decorations/delete': {
        post: operations['admin___avatar-decorations___delete'];
    };
    '/admin/avatar-decorations/list': {
        post: operations['admin___avatar-decorations___list'];
    };
    '/admin/avatar-decorations/update': {
        post: operations['admin___avatar-decorations___update'];
    };
    '/admin/delete-all-files-of-a-user': {
        post: operations['admin___delete-all-files-of-a-user'];
    };
    '/admin/unset-user-avatar': {
        post: operations['admin___unset-user-avatar'];
    };
    '/admin/unset-user-banner': {
        post: operations['admin___unset-user-banner'];
    };
    '/admin/drive/clean-remote-files': {
        post: operations['admin___drive___clean-remote-files'];
    };
    '/admin/drive/cleanup': {
        post: operations['admin___drive___cleanup'];
    };
    '/admin/drive/files': {
        post: operations['admin___drive___files'];
    };
    '/admin/drive/show-file': {
        post: operations['admin___drive___show-file'];
    };
    '/admin/emoji/add-aliases-bulk': {
        post: operations['admin___emoji___add-aliases-bulk'];
    };
    '/admin/emoji/add-tags-bulk': {
        post: operations['admin___emoji___add-tags-bulk'];
    };
    '/admin/emoji/add': {
        post: operations['admin___emoji___add'];
    };
    '/admin/emoji/copy': {
        post: operations['admin___emoji___copy'];
    };
    '/admin/emoji/delete-bulk': {
        post: operations['admin___emoji___delete-bulk'];
    };
    '/admin/emoji/delete': {
        post: operations['admin___emoji___delete'];
    };
    '/admin/emoji/import-zip': {
        post: operations['admin___emoji___import-zip'];
    };
    '/admin/emoji/list-remote': {
        post: operations['admin___emoji___list-remote'];
    };
    '/admin/emoji/list': {
        post: operations['admin___emoji___list'];
    };
    '/admin/emoji/remove-aliases-bulk': {
        post: operations['admin___emoji___remove-aliases-bulk'];
    };
    '/admin/emoji/remove-tags-bulk': {
        post: operations['admin___emoji___remove-tags-bulk'];
    };
    '/admin/emoji/set-aliases-bulk': {
        post: operations['admin___emoji___set-aliases-bulk'];
    };
    '/admin/emoji/set-tags-bulk': {
        post: operations['admin___emoji___set-tags-bulk'];
    };
    '/admin/emoji/set-category-bulk': {
        post: operations['admin___emoji___set-category-bulk'];
    };
    '/admin/emoji/set-license-bulk': {
        post: operations['admin___emoji___set-license-bulk'];
    };
    '/admin/emoji/update': {
        post: operations['admin___emoji___update'];
    };
    '/admin/federation/delete-all-files': {
        post: operations['admin___federation___delete-all-files'];
    };
    '/admin/federation/refresh-remote-instance-metadata': {
        post: operations['admin___federation___refresh-remote-instance-metadata'];
    };
    '/admin/federation/remove-all-following': {
        post: operations['admin___federation___remove-all-following'];
    };
    '/admin/federation/update-instance': {
        post: operations['admin___federation___update-instance'];
    };
    '/admin/get-index-stats': {
        post: operations['admin___get-index-stats'];
    };
    '/admin/get-table-stats': {
        post: operations['admin___get-table-stats'];
    };
    '/admin/get-user-ips': {
        post: operations['admin___get-user-ips'];
    };
    '/admin/invite/create': {
        post: operations['admin___invite___create'];
    };
    '/admin/invite/list': {
        post: operations['admin___invite___list'];
    };
    '/admin/queue/clear': {
        post: operations['admin___queue___clear'];
    };
    '/admin/queue/deliver-delayed': {
        post: operations['admin___queue___deliver-delayed'];
    };
    '/admin/queue/inbox-delayed': {
        post: operations['admin___queue___inbox-delayed'];
    };
    '/admin/queue/promote': {
        post: operations['admin___queue___promote'];
    };
    '/admin/queue/stats': {
        post: operations['admin___queue___stats'];
    };
    '/admin/relays/add': {
        post: operations['admin___relays___add'];
    };
    '/admin/relays/list': {
        post: operations['admin___relays___list'];
    };
    '/admin/relays/remove': {
        post: operations['admin___relays___remove'];
    };
    '/admin/reset-password': {
        post: operations['admin___reset-password'];
    };
    '/admin/send-email': {
        post: operations['admin___send-email'];
    };
    '/admin/server-info': {
        post: operations['admin___server-info'];
    };
    '/admin/show-user': {
        post: operations['admin___show-user'];
    };
    '/admin/show-users': {
        post: operations['admin___show-users'];
    };
    '/admin/suspend-user': {
        post: operations['admin___suspend-user'];
    };
    '/admin/unsuspend-user': {
        post: operations['admin___unsuspend-user'];
    };
    '/admin/update-meta': {
        post: operations['admin___update-meta'];
    };
    '/admin/delete-account': {
        post: operations['admin___delete-account'];
    };
    '/admin/update-user-note': {
        post: operations['admin___update-user-note'];
    };
    '/admin/roles/create': {
        post: operations['admin___roles___create'];
    };
    '/admin/roles/delete': {
        post: operations['admin___roles___delete'];
    };
    '/admin/roles/list': {
        post: operations['admin___roles___list'];
    };
    '/admin/roles/show': {
        post: operations['admin___roles___show'];
    };
    '/admin/roles/update': {
        post: operations['admin___roles___update'];
    };
    '/admin/roles/assign': {
        post: operations['admin___roles___assign'];
    };
    '/admin/roles/unassign': {
        post: operations['admin___roles___unassign'];
    };
    '/admin/roles/update-default-policies': {
        post: operations['admin___roles___update-default-policies'];
    };
    '/admin/roles/users': {
        post: operations['admin___roles___users'];
    };
    '/antennas/create': {
        post: operations['antennas___create'];
    };
    '/antennas/delete': {
        post: operations['antennas___delete'];
    };
    '/antennas/list': {
        post: operations['antennas___list'];
    };
    '/antennas/notes': {
        post: operations['antennas___notes'];
    };
    '/antennas/show': {
        post: operations['antennas___show'];
    };
    '/antennas/update': {
        post: operations['antennas___update'];
    };
    '/ap/get': {
        post: operations['ap___get'];
    };
    '/ap/show': {
        post: operations['ap___show'];
    };
    '/app/create': {
        post: operations['app___create'];
    };
    '/app/show': {
        post: operations['app___show'];
    };
    '/auth/accept': {
        post: operations['auth___accept'];
    };
    '/auth/session/generate': {
        post: operations['auth___session___generate'];
    };
    '/auth/session/show': {
        post: operations['auth___session___show'];
    };
    '/auth/session/userkey': {
        post: operations['auth___session___userkey'];
    };
    '/blocking/create': {
        post: operations['blocking___create'];
    };
    '/blocking/delete': {
        post: operations['blocking___delete'];
    };
    '/blocking/list': {
        post: operations['blocking___list'];
    };
    '/channels/create': {
        post: operations['channels___create'];
    };
    '/channels/follow': {
        post: operations['channels___follow'];
    };
    '/channels/followed': {
        post: operations['channels___followed'];
    };
    '/channels/owned': {
        post: operations['channels___owned'];
    };
    '/channels/show': {
        post: operations['channels___show'];
    };
    '/channels/timeline': {
        post: operations['channels___timeline'];
    };
    '/channels/unfollow': {
        post: operations['channels___unfollow'];
    };
    '/channels/update': {
        post: operations['channels___update'];
    };
    '/channels/favorite': {
        post: operations['channels___favorite'];
    };
    '/channels/unfavorite': {
        post: operations['channels___unfavorite'];
    };
    '/channels/my-favorites': {
        post: operations['channels___my-favorites'];
    };
    '/channels/search': {
        post: operations['channels___search'];
    };
    '/charts/ap-request': {
        post: operations['charts___ap-request'];
    };
    '/charts/drive': {
        post: operations['charts___drive'];
    };
    '/charts/federation': {
        post: operations['charts___federation'];
    };
    '/charts/instance': {
        post: operations['charts___instance'];
    };
    '/charts/notes': {
        post: operations['charts___notes'];
    };
    '/charts/users': {
        post: operations['charts___users'];
    };
    '/clips/add-note': {
        post: operations['clips___add-note'];
    };
    '/clips/remove-note': {
        post: operations['clips___remove-note'];
    };
    '/clips/create': {
        post: operations['clips___create'];
    };
    '/clips/delete': {
        post: operations['clips___delete'];
    };
    '/clips/list': {
        post: operations['clips___list'];
    };
    '/clips/notes': {
        post: operations['clips___notes'];
    };
    '/clips/show': {
        post: operations['clips___show'];
    };
    '/clips/update': {
        post: operations['clips___update'];
    };
    '/clips/favorite': {
        post: operations['clips___favorite'];
    };
    '/clips/unfavorite': {
        post: operations['clips___unfavorite'];
    };
    '/clips/my-favorites': {
        post: operations['clips___my-favorites'];
    };
    '/drive': {
        post: operations['drive'];
    };
    '/drive/files': {
        post: operations['drive___files'];
    };
    '/drive/files/attached-notes': {
        post: operations['drive___files___attached-notes'];
    };
    '/drive/files/check-existence': {
        post: operations['drive___files___check-existence'];
    };
    '/drive/files/create': {
        post: operations['drive___files___create'];
    };
    '/drive/files/delete': {
        post: operations['drive___files___delete'];
    };
    '/drive/files/find-by-hash': {
        post: operations['drive___files___find-by-hash'];
    };
    '/drive/files/find': {
        post: operations['drive___files___find'];
    };
    '/drive/files/show': {
        post: operations['drive___files___show'];
    };
    '/drive/files/update': {
        post: operations['drive___files___update'];
    };
    '/drive/files/upload-from-url': {
        post: operations['drive___files___upload-from-url'];
    };
    '/drive/folders': {
        post: operations['drive___folders'];
    };
    '/drive/folders/create': {
        post: operations['drive___folders___create'];
    };
    '/drive/folders/delete': {
        post: operations['drive___folders___delete'];
    };
    '/drive/folders/find': {
        post: operations['drive___folders___find'];
    };
    '/drive/folders/show': {
        post: operations['drive___folders___show'];
    };
    '/drive/folders/update': {
        post: operations['drive___folders___update'];
    };
    '/drive/stream': {
        post: operations['drive___stream'];
    };
    '/email-address/available': {
        post: operations['email-address___available'];
    };
    '/endpoint': {
        post: operations['endpoint'];
    };
    '/endpoints': {
        post: operations['endpoints'];
    };
    '/export-custom-emojis': {
        post: operations['export-custom-emojis'];
    };
    '/federation/followers': {
        post: operations['federation___followers'];
    };
    '/federation/following': {
        post: operations['federation___following'];
    };
    '/federation/instances': {
        post: operations['federation___instances'];
    };
    '/federation/show-instance': {
        post: operations['federation___show-instance'];
    };
    '/federation/update-remote-user': {
        post: operations['federation___update-remote-user'];
    };
    '/federation/users': {
        post: operations['federation___users'];
    };
    '/federation/stats': {
        post: operations['federation___stats'];
    };
    '/following/create': {
        post: operations['following___create'];
    };
    '/following/delete': {
        post: operations['following___delete'];
    };
    '/following/update': {
        post: operations['following___update'];
    };
    '/following/update-all': {
        post: operations['following___update-all'];
    };
    '/following/invalidate': {
        post: operations['following___invalidate'];
    };
    '/following/requests/accept': {
        post: operations['following___requests___accept'];
    };
    '/following/requests/cancel': {
        post: operations['following___requests___cancel'];
    };
    '/following/requests/list': {
        post: operations['following___requests___list'];
    };
    '/following/requests/reject': {
        post: operations['following___requests___reject'];
    };
    '/get-avatar-decorations': {
        post: operations['get-avatar-decorations'];
    };
    '/hashtags/list': {
        post: operations['hashtags___list'];
    };
    '/hashtags/search': {
        post: operations['hashtags___search'];
    };
    '/hashtags/show': {
        post: operations['hashtags___show'];
    };
    '/hashtags/users': {
        post: operations['hashtags___users'];
    };
    '/i': {
        post: operations['i'];
    };
    '/i/2fa/done': {
        post: operations['i___2fa___done'];
    };
    '/i/2fa/key-done': {
        post: operations['i___2fa___key-done'];
    };
    '/i/2fa/password-less': {
        post: operations['i___2fa___password-less'];
    };
    '/i/2fa/register-key': {
        post: operations['i___2fa___register-key'];
    };
    '/i/2fa/register': {
        post: operations['i___2fa___register'];
    };
    '/i/2fa/update-key': {
        post: operations['i___2fa___update-key'];
    };
    '/i/2fa/remove-key': {
        post: operations['i___2fa___remove-key'];
    };
    '/i/2fa/unregister': {
        post: operations['i___2fa___unregister'];
    };
    '/i/apps': {
        post: operations['i___apps'];
    };
    '/i/authorized-apps': {
        post: operations['i___authorized-apps'];
    };
    '/i/change-password': {
        post: operations['i___change-password'];
    };
    '/i/delete-account': {
        post: operations['i___delete-account'];
    };
    '/i/export-blocking': {
        post: operations['i___export-blocking'];
    };
    '/i/export-following': {
        post: operations['i___export-following'];
    };
    '/i/export-mute': {
        post: operations['i___export-mute'];
    };
    '/i/export-notes': {
        post: operations['i___export-notes'];
    };
    '/i/export-clips': {
        post: operations['i___export-clips'];
    };
    '/i/export-user-lists': {
        post: operations['i___export-user-lists'];
    };
    '/i/export-antennas': {
        post: operations['i___export-antennas'];
    };
    '/i/import-blocking': {
        post: operations['i___import-blocking'];
    };
    '/i/import-following': {
        post: operations['i___import-following'];
    };
    '/i/import-muting': {
        post: operations['i___import-muting'];
    };
    '/i/import-user-lists': {
        post: operations['i___import-user-lists'];
    };
    '/i/import-antennas': {
        post: operations['i___import-antennas'];
    };
    '/i/notifications': {
        post: operations['i___notifications'];
    };
    '/i/notifications-grouped': {
        post: operations['i___notifications-grouped'];
    };
    '/i/pin': {
        post: operations['i___pin'];
    };
    '/i/read-all-unread-notes': {
        post: operations['i___read-all-unread-notes'];
    };
    '/i/regenerate-token': {
        post: operations['i___regenerate-token'];
    };
    '/i/registry/get-all': {
        post: operations['i___registry___get-all'];
    };
    '/i/registry/get-detail': {
        post: operations['i___registry___get-detail'];
    };
    '/i/registry/get': {
        post: operations['i___registry___get'];
    };
    '/i/registry/keys-with-type': {
        post: operations['i___registry___keys-with-type'];
    };
    '/i/registry/keys': {
        post: operations['i___registry___keys'];
    };
    '/i/registry/remove': {
        post: operations['i___registry___remove'];
    };
    '/i/registry/scopes-with-domain': {
        post: operations['i___registry___scopes-with-domain'];
    };
    '/i/registry/set': {
        post: operations['i___registry___set'];
    };
    '/i/revoke-token': {
        post: operations['i___revoke-token'];
    };
    '/i/signin-history': {
        post: operations['i___signin-history'];
    };
    '/i/unpin': {
        post: operations['i___unpin'];
    };
    '/i/update-email': {
        post: operations['i___update-email'];
    };
    '/i/update': {
        post: operations['i___update'];
    };
    '/i/move': {
        post: operations['i___move'];
    };
    '/i/webhooks/create': {
        post: operations['i___webhooks___create'];
    };
    '/i/webhooks/list': {
        post: operations['i___webhooks___list'];
    };
    '/i/webhooks/show': {
        post: operations['i___webhooks___show'];
    };
    '/i/webhooks/update': {
        post: operations['i___webhooks___update'];
    };
    '/i/webhooks/delete': {
        post: operations['i___webhooks___delete'];
    };
    '/invite/create': {
        post: operations['invite___create'];
    };
    '/invite/delete': {
        post: operations['invite___delete'];
    };
    '/invite/list': {
        post: operations['invite___list'];
    };
    '/invite/limit': {
        post: operations['invite___limit'];
    };
    '/meta': {
        post: operations['meta'];
    };
    '/emojis': {
        get: operations['emojis'];
        post: operations['emojis'];
    };
    '/emoji': {
        get: operations['emoji'];
        post: operations['emoji'];
    };
    '/miauth/gen-token': {
        post: operations['miauth___gen-token'];
    };
    '/mute/create': {
        post: operations['mute___create'];
    };
    '/mute/delete': {
        post: operations['mute___delete'];
    };
    '/mute/list': {
        post: operations['mute___list'];
    };
    '/renote-mute/create': {
        post: operations['renote-mute___create'];
    };
    '/renote-mute/delete': {
        post: operations['renote-mute___delete'];
    };
    '/renote-mute/list': {
        post: operations['renote-mute___list'];
    };
    '/my/apps': {
        post: operations['my___apps'];
    };
    '/notes': {
        post: operations['notes'];
    };
    '/notes/children': {
        post: operations['notes___children'];
    };
    '/notes/clips': {
        post: operations['notes___clips'];
    };
    '/notes/conversation': {
        post: operations['notes___conversation'];
    };
    '/notes/create': {
        post: operations['notes___create'];
    };
    '/notes/delete': {
        post: operations['notes___delete'];
    };
    '/notes/global-timeline': {
        post: operations['notes___global-timeline'];
    };
    '/notes/hybrid-timeline': {
        post: operations['notes___hybrid-timeline'];
    };
    '/notes/local-timeline': {
        post: operations['notes___local-timeline'];
    };
    '/notes/mentions': {
        post: operations['notes___mentions'];
    };
    '/notes/polls/vote': {
        post: operations['notes___polls___vote'];
    };
    '/notes/reactions': {
        get: operations['notes___reactions'];
        post: operations['notes___reactions'];
    };
    '/notes/reactions/create': {
        post: operations['notes___reactions___create'];
    };
    '/notes/reactions/delete': {
        post: operations['notes___reactions___delete'];
    };
    '/notes/renotes': {
        post: operations['notes___renotes'];
    };
    '/notes/replies': {
        post: operations['notes___replies'];
    };
    '/notes/search-by-tag': {
        post: operations['notes___search-by-tag'];
    };
    '/notes/search': {
        post: operations['notes___search'];
    };
    '/notes/show': {
        post: operations['notes___show'];
    };
    '/notes/state': {
        post: operations['notes___state'];
    };
    '/notes/thread-muting/create': {
        post: operations['notes___thread-muting___create'];
    };
    '/notes/thread-muting/delete': {
        post: operations['notes___thread-muting___delete'];
    };
    '/notes/timeline': {
        post: operations['notes___timeline'];
    };
    '/notes/translate': {
        post: operations['notes___translate'];
    };
    '/notes/unrenote': {
        post: operations['notes___unrenote'];
    };
    '/notes/user-list-timeline': {
        post: operations['notes___user-list-timeline'];
    };
    '/notifications/create': {
        post: operations['notifications___create'];
    };
    '/notifications/flush': {
        post: operations['notifications___flush'];
    };
    '/notifications/mark-all-as-read': {
        post: operations['notifications___mark-all-as-read'];
    };
    '/notifications/test-notification': {
        post: operations['notifications___test-notification'];
    };
    '/flash/create': {
        post: operations['flash___create'];
    };
    '/flash/delete': {
        post: operations['flash___delete'];
    };
    '/flash/like': {
        post: operations['flash___like'];
    };
    '/flash/show': {
        post: operations['flash___show'];
    };
    '/flash/unlike': {
        post: operations['flash___unlike'];
    };
    '/flash/update': {
        post: operations['flash___update'];
    };
    '/flash/my': {
        post: operations['flash___my'];
    };
    '/flash/my-likes': {
        post: operations['flash___my-likes'];
    };
    '/ping': {
        post: operations['ping'];
    };
    '/pinned-users': {
        post: operations['pinned-users'];
    };
    '/roles/list': {
        post: operations['roles___list'];
    };
    '/roles/show': {
        post: operations['roles___show'];
    };
    '/roles/users': {
        post: operations['roles___users'];
    };
    '/request-reset-password': {
        post: operations['request-reset-password'];
    };
    '/reset-db': {
        post: operations['reset-db'];
    };
    '/reset-password': {
        post: operations['reset-password'];
    };
    '/server-info': {
        get: operations['server-info'];
        post: operations['server-info'];
    };
    '/stats': {
        post: operations['stats'];
    };
    '/test': {
        post: operations['test'];
    };
    '/username/available': {
        post: operations['username___available'];
    };
    '/users/clips': {
        post: operations['users___clips'];
    };
    '/users/followers': {
        post: operations['users___followers'];
    };
    '/users/following': {
        post: operations['users___following'];
    };
    '/users/get-frequently-replied-users': {
        post: operations['users___get-frequently-replied-users'];
    };
    '/users/lists/create': {
        post: operations['users___lists___create'];
    };
    '/users/lists/delete': {
        post: operations['users___lists___delete'];
    };
    '/users/lists/list': {
        post: operations['users___lists___list'];
    };
    '/users/lists/pull': {
        post: operations['users___lists___pull'];
    };
    '/users/lists/push': {
        post: operations['users___lists___push'];
    };
    '/users/lists/show': {
        post: operations['users___lists___show'];
    };
    '/users/lists/favorite': {
        post: operations['users___lists___favorite'];
    };
    '/users/lists/unfavorite': {
        post: operations['users___lists___unfavorite'];
    };
    '/users/lists/update': {
        post: operations['users___lists___update'];
    };
    '/users/lists/create-from-public': {
        post: operations['users___lists___create-from-public'];
    };
    '/users/lists/update-membership': {
        post: operations['users___lists___update-membership'];
    };
    '/users/lists/get-memberships': {
        post: operations['users___lists___get-memberships'];
    };
    '/users/notes': {
        post: operations['users___notes'];
    };
    '/users/flashs': {
        post: operations['users___flashs'];
    };
    '/users/reactions': {
        post: operations['users___reactions'];
    };
    '/users/relation': {
        post: operations['users___relation'];
    };
    '/users/search-by-username-and-host': {
        post: operations['users___search-by-username-and-host'];
    };
    '/users/search': {
        post: operations['users___search'];
    };
    '/users/show': {
        post: operations['users___show'];
    };
    '/users/update-memo': {
        post: operations['users___update-memo'];
    };
};
export type webhooks = Record<string, never>;
export type components = {
    schemas: {
        Error: {
            error: {
                code: string;
                message: string;
                id: string;
            };
        };
        UserLite: {
            id: string;
            name: string | null;
            username: string;
            host: string | null;
            avatarUrl: string | null;
            avatarBlurhash: string | null;
            avatarDecorations: {
                id: string;
                angle?: number;
                flipH?: boolean;
                url: string;
                offsetX?: number;
                offsetY?: number;
            }[];
            isBot?: boolean;
            instance?: {
                name: string | null;
                softwareName: string | null;
                softwareVersion: string | null;
                iconUrl: string | null;
                faviconUrl: string | null;
                themeColor: string | null;
            };
            emojis: {
                [key: string]: string;
            };
            badgeRoles?: ({
                name: string;
                iconUrl: string | null;
                displayOrder: number;
            })[];
        };
        UserDetailedNotMeOnly: {
            url: string | null;
            uri: string | null;
            movedTo: string | null;
            alsoKnownAs: string[] | null;
            createdAt: string;
            updatedAt: string | null;
            lastFetchedAt: string | null;
            bannerUrl: string | null;
            bannerBlurhash: string | null;
            isLocked: boolean;
            isSilenced: boolean;
            isSuspended: boolean;
            description: string | null;
            location: string | null;
            birthday: string | null;
            lang: string | null;
            fields: {
                name: string;
                value: string;
            }[];
            verifiedLinks: string[];
            followersCount: number;
            followingCount: number;
            notesCount: number;
            pinnedNoteIds: string[];
            pinnedNotes: components['schemas']['Note'][];
            publicReactions: boolean;
            followingVisibility: 'public' | 'followers' | 'private';
            followersVisibility: 'public' | 'followers' | 'private';
            roles: components['schemas']['RoleLite'][];
            memo: string | null;
            moderationNote?: string;
            twoFactorEnabled?: boolean;
            usePasswordLessLogin?: boolean;
            securityKeys?: boolean;
            isFollowing?: boolean;
            isFollowed?: boolean;
            hasPendingFollowRequestFromYou?: boolean;
            hasPendingFollowRequestToYou?: boolean;
            isBlocking?: boolean;
            isBlocked?: boolean;
            isMuted?: boolean;
            isRenoteMuted?: boolean;
            notify?: 'normal' | 'none';
            withReplies?: boolean;
        };
        MeDetailedOnly: {
            avatarId: string | null;
            bannerId: string | null;
            isModerator: boolean | null;
            isAdmin: boolean | null;
            receiveAnnouncementEmail: boolean;
            alwaysMarkNsfw: boolean;
            autoSensitive: boolean;
            carefulBot: boolean;
            autoAcceptFollowed: boolean;
            noCrawle: boolean;
            preventAiLearning: boolean;
            isExplorable: boolean;
            isDeleted: boolean;
            twoFactorBackupCodesStock: 'full' | 'partial' | 'none';
            hasUnreadSpecifiedNotes: boolean;
            hasUnreadMentions: boolean;
            hasUnreadAntenna: boolean;
            hasUnreadChannel: boolean;
            hasUnreadNotification: boolean;
            hasPendingReceivedFollowRequest: boolean;
            unreadNotificationsCount: number;
            mutedWords: string[][];
            hardMutedWords: string[][];
            mutedInstances: string[] | null;
            notificationRecieveConfig: {
                note?: OneOf<[
                    {
                        type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                    },
                    {
                        type: 'list';
                        userListId: string;
                    }
                ]>;
                follow?: OneOf<[
                    {
                        type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                    },
                    {
                        type: 'list';
                        userListId: string;
                    }
                ]>;
                mention?: OneOf<[
                    {
                        type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                    },
                    {
                        type: 'list';
                        userListId: string;
                    }
                ]>;
                reply?: OneOf<[
                    {
                        type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                    },
                    {
                        type: 'list';
                        userListId: string;
                    }
                ]>;
                renote?: OneOf<[
                    {
                        type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                    },
                    {
                        type: 'list';
                        userListId: string;
                    }
                ]>;
                quote?: OneOf<[
                    {
                        type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                    },
                    {
                        type: 'list';
                        userListId: string;
                    }
                ]>;
                reaction?: OneOf<[
                    {
                        type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                    },
                    {
                        type: 'list';
                        userListId: string;
                    }
                ]>;
                pollEnded?: OneOf<[
                    {
                        type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                    },
                    {
                        type: 'list';
                        userListId: string;
                    }
                ]>;
                receiveFollowRequest?: OneOf<[
                    {
                        type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                    },
                    {
                        type: 'list';
                        userListId: string;
                    }
                ]>;
                followRequestAccepted?: OneOf<[
                    {
                        type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                    },
                    {
                        type: 'list';
                        userListId: string;
                    }
                ]>;
                roleAssigned?: OneOf<[
                    {
                        type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                    },
                    {
                        type: 'list';
                        userListId: string;
                    }
                ]>;
                app?: OneOf<[
                    {
                        type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                    },
                    {
                        type: 'list';
                        userListId: string;
                    }
                ]>;
                test?: OneOf<[
                    {
                        type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                    },
                    {
                        type: 'list';
                        userListId: string;
                    }
                ]>;
            };
            emailNotificationTypes: string[];
            policies: components['schemas']['RolePolicies'];
            twoFactorEnabled: boolean;
            usePasswordLessLogin: boolean;
            securityKeys: boolean;
            email?: string | null;
            emailVerified?: boolean | null;
            securityKeysList?: {
                id: string;
                name: string;
                lastUsed: string;
            }[];
        };
        UserDetailedNotMe: components['schemas']['UserLite'] & components['schemas']['UserDetailedNotMeOnly'];
        MeDetailed: components['schemas']['UserLite'] & components['schemas']['UserDetailedNotMeOnly'] & components['schemas']['MeDetailedOnly'];
        UserDetailed: components['schemas']['UserDetailedNotMe'] | components['schemas']['MeDetailed'];
        User: components['schemas']['UserLite'] | components['schemas']['UserDetailed'];
        UserList: {
            id: string;
            createdAt: string;
            name: string;
            userIds?: string[];
            isPublic: boolean;
        };
        App: {
            id: string;
            name: string;
            callbackUrl: string | null;
            permission: string[];
            secret?: string;
            isAuthorized?: boolean;
        };
        Note: {
            id: string;
            createdAt: string;
            deletedAt?: string | null;
            text: string | null;
            cw?: string | null;
            userId: string;
            user: components['schemas']['UserLite'];
            replyId?: string | null;
            renoteId?: string | null;
            reply?: components['schemas']['Note'] | null;
            renote?: components['schemas']['Note'] | null;
            isHidden?: boolean;
            visibility: 'public' | 'home' | 'followers' | 'specified';
            mentions?: string[];
            visibleUserIds?: string[];
            fileIds?: string[];
            files?: components['schemas']['DriveFile'][];
            tags?: string[];
            poll?: ({
                expiresAt?: string | null;
                multiple: boolean;
                choices: {
                    isVoted: boolean;
                    text: string;
                    votes: number;
                }[];
            }) | null;
            emojis?: {
                [key: string]: string;
            };
            channelId?: string | null;
            channel?: ({
                id: string;
                name: string;
                color: string;
                isSensitive: boolean;
                allowRenoteToExternal: boolean;
                userId: string | null;
            }) | null;
            localOnly?: boolean;
            reactionAcceptance: 'likeOnly' | 'likeOnlyForRemote' | 'nonSensitiveOnly' | 'nonSensitiveOnlyForLocalLikeOnlyForRemote' | null;
            reactionEmojis: {
                [key: string]: string;
            };
            reactions: {
                [key: string]: number;
            };
            renoteCount: number;
            repliesCount: number;
            uri?: string;
            url?: string;
            reactionAndUserPairCache?: string[];
            clippedCount?: number;
            myReaction?: string | null;
        };
        NoteReaction: {
            id: string;
            createdAt: string;
            user: components['schemas']['UserLite'];
            type: string;
            note?: components['schemas']['Note'];
        };
        Notification: {
            id: string;
            createdAt: string;
            type: 'note';
            user: components['schemas']['UserLite'];
            userId: string;
            note: components['schemas']['Note'];
        } | {
            id: string;
            createdAt: string;
            type: 'mention';
            user: components['schemas']['UserLite'];
            userId: string;
            note: components['schemas']['Note'];
        } | {
            id: string;
            createdAt: string;
            type: 'reply';
            user: components['schemas']['UserLite'];
            userId: string;
            note: components['schemas']['Note'];
        } | {
            id: string;
            createdAt: string;
            type: 'renote';
            user: components['schemas']['UserLite'];
            userId: string;
            note: components['schemas']['Note'];
        } | {
            id: string;
            createdAt: string;
            type: 'quote';
            user: components['schemas']['UserLite'];
            userId: string;
            note: components['schemas']['Note'];
        } | {
            id: string;
            createdAt: string;
            type: 'reaction';
            user: components['schemas']['UserLite'];
            userId: string;
            note: components['schemas']['Note'];
            reaction: string;
        } | {
            id: string;
            createdAt: string;
            type: 'pollEnded';
            user: components['schemas']['UserLite'];
            userId: string;
            note: components['schemas']['Note'];
        } | {
            id: string;
            createdAt: string;
            type: 'follow';
            user: components['schemas']['UserLite'];
            userId: string;
        } | {
            id: string;
            createdAt: string;
            type: 'receiveFollowRequest';
            user: components['schemas']['UserLite'];
            userId: string;
        } | {
            id: string;
            createdAt: string;
            type: 'followRequestAccepted';
            user: components['schemas']['UserLite'];
            userId: string;
        } | {
            id: string;
            createdAt: string;
            type: 'roleAssigned';
            role: components['schemas']['Role'];
        } | ({
            id: string;
            createdAt: string;
            type: 'app';
            body: string;
            header: string | null;
            icon: string | null;
        }) | {
            id: string;
            createdAt: string;
            type: 'reaction:grouped';
            note: components['schemas']['Note'];
            reactions: {
                user: components['schemas']['UserLite'];
                reaction: string;
            }[];
        } | {
            id: string;
            createdAt: string;
            type: 'renote:grouped';
            note: components['schemas']['Note'];
            users: components['schemas']['UserLite'][];
        } | {
            id: string;
            createdAt: string;
            type: 'test';
        };
        DriveFile: {
            id: string;
            createdAt: string;
            name: string;
            type: string;
            md5: string;
            size: number;
            isSensitive: boolean;
            blurhash: string | null;
            properties: {
                width?: number;
                height?: number;
                orientation?: number;
                avgColor?: string;
            };
            url: string;
            thumbnailUrl: string | null;
            comment: string | null;
            folderId: string | null;
            folder?: components['schemas']['DriveFolder'] | null;
            userId: string | null;
            user?: components['schemas']['UserLite'] | null;
        };
        DriveFolder: {
            id: string;
            createdAt: string;
            name: string;
            parentId: string | null;
            foldersCount?: number;
            filesCount?: number;
            parent?: components['schemas']['DriveFolder'] | null;
        };
        Following: {
            id: string;
            createdAt: string;
            followeeId: string;
            followerId: string;
            followee?: components['schemas']['UserDetailedNotMe'];
            follower?: components['schemas']['UserDetailedNotMe'];
        };
        Muting: {
            id: string;
            createdAt: string;
            expiresAt: string | null;
            muteeId: string;
            mutee: components['schemas']['UserDetailedNotMe'];
            excludeNotification: boolean;
        };
        RenoteMuting: {
            id: string;
            createdAt: string;
            muteeId: string;
            mutee: components['schemas']['UserDetailedNotMe'];
        };
        Blocking: {
            id: string;
            createdAt: string;
            blockeeId: string;
            blockee: components['schemas']['UserDetailedNotMe'];
        };
        Hashtag: {
            tag: string;
            mentionedUsersCount: number;
            mentionedLocalUsersCount: number;
            mentionedRemoteUsersCount: number;
            attachedUsersCount: number;
            attachedLocalUsersCount: number;
            attachedRemoteUsersCount: number;
        };
        InviteCode: {
            id: string;
            code: string;
            expiresAt: string | null;
            createdAt: string;
            createdBy: components['schemas']['UserLite'] | null;
            usedBy: components['schemas']['UserLite'] | null;
            usedAt: string | null;
            used: boolean;
        };
        Channel: {
            id: string;
            createdAt: string;
            lastNotedAt: string | null;
            name: string;
            description: string | null;
            userId: string | null;
            bannerId: string | null;
            bannerUrl: string | null;
            pinnedNoteIds: string[];
            color: string;
            isArchived: boolean;
            usersCount: number;
            notesCount: number;
            isSensitive: boolean;
            allowRenoteToExternal: boolean;
            isFollowing?: boolean;
            isFavorited?: boolean;
            pinnedNotes?: components['schemas']['Note'][];
        };
        QueueCount: {
            waiting: number;
            active: number;
            completed: number;
            failed: number;
            delayed: number;
        };
        Antenna: {
            id: string;
            createdAt: string;
            name: string;
            keywords: string[][];
            excludeKeywords: string[][];
            src: 'home' | 'all' | 'users' | 'list' | 'users_blacklist';
            userListId: string | null;
            users: string[];
            caseSensitive: boolean;
            localOnly: boolean;
            excludeBots: boolean;
            withReplies: boolean;
            withFile: boolean;
            isActive: boolean;
            hasUnreadNote: boolean;
            notify: boolean;
        };
        Clip: {
            id: string;
            createdAt: string;
            lastClippedAt: string | null;
            userId: string;
            user: components['schemas']['UserLite'];
            name: string;
            description: string | null;
            isPublic: boolean;
            favoritedCount: number;
            isFavorited?: boolean;
            notesCount?: number;
        };
        FederationInstance: {
            id: string;
            firstRetrievedAt: string;
            host: string;
            usersCount: number;
            notesCount: number;
            followingCount: number;
            followersCount: number;
            isNotResponding: boolean;
            isSuspended: boolean;
            suspensionState: 'none' | 'manuallySuspended' | 'goneSuspended' | 'autoSuspendedForNotResponding';
            isBlocked: boolean;
            softwareName: string | null;
            softwareVersion: string | null;
            openRegistrations: boolean | null;
            name: string | null;
            description: string | null;
            maintainerName: string | null;
            maintainerEmail: string | null;
            isSilenced: boolean;
            isMediaSilenced: boolean;
            iconUrl: string | null;
            faviconUrl: string | null;
            themeColor: string | null;
            infoUpdatedAt: string | null;
            latestRequestReceivedAt: string | null;
            moderationNote?: string | null;
        };
        EmojiSimple: {
            aliases: string[];
            tags: string[];
            name: string;
            category: string | null;
            url: string;
            localOnly?: boolean;
            isSensitive?: boolean;
            roleIdsThatCanBeUsedThisEmojiAsReaction?: string[];
        };
        EmojiDetailed: {
            id: string;
            aliases: string[];
            tags: string[];
            name: string;
            category: string | null;
            host: string | null;
            url: string;
            license: string | null;
            isSensitive: boolean;
            localOnly: boolean;
            roleIdsThatCanBeUsedThisEmojiAsReaction: string[];
        };
        Flash: {
            id: string;
            createdAt: string;
            updatedAt: string;
            userId: string;
            user: components['schemas']['UserLite'];
            title: string;
            summary: string;
            script: string;
            visibility: 'private' | 'public';
            likedCount: number | null;
            isLiked?: boolean;
        };
        Signin: {
            id: string;
            createdAt: string;
            ip: string;
            headers: Record<string, never>;
            success: boolean;
        };
        RoleCondFormulaLogics: {
            id: string;
            type: 'and' | 'or';
            values: components['schemas']['RoleCondFormulaValue'][];
        };
        RoleCondFormulaValueNot: {
            id: string;
            type: 'not';
            value: components['schemas']['RoleCondFormulaValue'];
        };
        RoleCondFormulaValueIsLocalOrRemote: {
            id: string;
            type: 'isLocal' | 'isRemote';
        };
        RoleCondFormulaValueUserSettingBooleanSchema: {
            id: string;
            type: 'isSuspended' | 'isLocked' | 'isBot' | 'isExplorable';
        };
        RoleCondFormulaValueAssignedRole: {
            id: string;
            type: 'roleAssignedTo';
            roleId: string;
        };
        RoleCondFormulaValueCreated: {
            id: string;
            type: 'createdLessThan' | 'createdMoreThan';
            sec: number;
        };
        RoleCondFormulaFollowersOrFollowingOrNotes: {
            id: string;
            type: 'followersLessThanOrEq' | 'followersMoreThanOrEq' | 'followingLessThanOrEq' | 'followingMoreThanOrEq' | 'notesLessThanOrEq' | 'notesMoreThanOrEq';
            value: number;
        };
        RoleCondFormulaValue: components['schemas']['RoleCondFormulaLogics'] | components['schemas']['RoleCondFormulaValueNot'] | components['schemas']['RoleCondFormulaValueIsLocalOrRemote'] | components['schemas']['RoleCondFormulaValueUserSettingBooleanSchema'] | components['schemas']['RoleCondFormulaValueAssignedRole'] | components['schemas']['RoleCondFormulaValueCreated'] | components['schemas']['RoleCondFormulaFollowersOrFollowingOrNotes'];
        RoleLite: {
            id: string;
            name: string;
            color: string | null;
            iconUrl: string | null;
            description: string;
            isModerator: boolean;
            isAdministrator: boolean;
            displayOrder: number;
        };
        Role: components['schemas']['RoleLite'] & ({
            createdAt: string;
            updatedAt: string;
            target: 'manual' | 'conditional';
            condFormula: components['schemas']['RoleCondFormulaValue'];
            isPublic: boolean;
            isExplorable: boolean;
            asBadge: boolean;
            canEditMembersByModerator: boolean;
            policies: {
                [key: string]: {
                    value?: number | boolean;
                    priority?: number;
                    useDefault?: boolean;
                };
            };
            usersCount: number;
        });
        RolePolicies: {
            gtlAvailable: boolean;
            ltlAvailable: boolean;
            canPublicNote: boolean;
            mentionLimit: number;
            canInvite: boolean;
            inviteLimit: number;
            inviteLimitCycle: number;
            inviteExpirationTime: number;
            canManageCustomEmojis: boolean;
            canManageAvatarDecorations: boolean;
            canSearchNotes: boolean;
            canUseTranslator: boolean;
            driveCapacityMb: number;
            alwaysMarkNsfw: boolean;
            canUpdateBioMedia: boolean;
            pinLimit: number;
            rateLimitFactor: number;
            avatarDecorationLimit: number;
            canMakePureRenoteOfRemoteNotes: boolean;
            canImportAntennas: boolean;
            canImportBlocking: boolean;
            canImportFollowing: boolean;
            canImportMuting: boolean;
            canImportUserLists: boolean;
        };
        MetaLite: {
            maintainerName: string | null;
            maintainerEmail: string | null;
            version: string;
            providesTarball: boolean;
            name: string | null;
            shortName: string | null;
            uri: string;
            description: string | null;
            langs: string[];
            tosUrl: string | null;
            repositoryUrl: string | null;
            feedbackUrl: string | null;
            defaultDarkTheme: string | null;
            defaultLightTheme: string | null;
            disableRegistration: boolean;
            emailRequiredForSignup: boolean;
            enableHcaptcha: boolean;
            hcaptchaSiteKey: string | null;
            enableMcaptcha: boolean;
            mcaptchaSiteKey: string | null;
            mcaptchaInstanceUrl: string | null;
            enableRecaptcha: boolean;
            recaptchaSiteKey: string | null;
            enableTurnstile: boolean;
            turnstileSiteKey: string | null;
            enableTestcaptcha: boolean;
            mascotImageUrl: string;
            bannerUrl: string | null;
            serverErrorImageUrl: string | null;
            infoImageUrl: string | null;
            notFoundImageUrl: string | null;
            iconUrl: string | null;
            maxNoteTextLength: number;
            enableEmail: boolean;
            translatorAvailable: boolean;
            mediaProxy: string;
            enableUrlPreview: boolean;
            backgroundImageUrl: string | null;
            impressumUrl: string | null;
            logoImageUrl: string | null;
            privacyPolicyUrl: string | null;
            inquiryUrl: string | null;
            serverRules: string[];
            themeColor: string | null;
            policies: components['schemas']['RolePolicies'];
            noteSearchableScope: 'local' | 'global';
            maxFileSize: number;
        };
        MetaDetailedOnly: {
            features?: {
                registration: boolean;
                emailRequiredForSignup: boolean;
                localTimeline: boolean;
                globalTimeline: boolean;
                hcaptcha: boolean;
                turnstile: boolean;
                recaptcha: boolean;
                objectStorage: boolean;
                miauth?: boolean;
            };
            proxyAccountName: string | null;
            requireSetup: boolean;
            cacheRemoteFiles: boolean;
            cacheRemoteSensitiveFiles: boolean;
        };
        MetaDetailed: components['schemas']['MetaLite'] & components['schemas']['MetaDetailedOnly'];
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
};
export type $defs = Record<string, never>;
export type external = Record<string, never>;
export type operations = {
    admin___meta: {
        responses: {
            200: {
                content: {
                    'application/json': {
                        cacheRemoteFiles: boolean;
                        cacheRemoteSensitiveFiles: boolean;
                        emailRequiredForSignup: boolean;
                        enableHcaptcha: boolean;
                        hcaptchaSiteKey: string | null;
                        enableMcaptcha: boolean;
                        mcaptchaSiteKey: string | null;
                        mcaptchaInstanceUrl: string | null;
                        enableRecaptcha: boolean;
                        recaptchaSiteKey: string | null;
                        enableTurnstile: boolean;
                        turnstileSiteKey: string | null;
                        enableTestcaptcha: boolean;
                        mascotImageUrl: string | null;
                        bannerUrl: string | null;
                        serverErrorImageUrl: string | null;
                        infoImageUrl: string | null;
                        notFoundImageUrl: string | null;
                        iconUrl: string | null;
                        app192IconUrl: string | null;
                        app512IconUrl: string | null;
                        enableEmail: boolean;
                        translatorAvailable: boolean;
                        silencedHosts: string[];
                        mediaSilencedHosts: string[];
                        pinnedUsers: string[];
                        blockedHosts: string[];
                        sensitiveWords: string[];
                        prohibitedWords: string[];
                        prohibitedWordsForNameOfUser: string[];
                        bannedEmailDomains?: string[];
                        preservedUsernames: string[];
                        hcaptchaSecretKey: string | null;
                        mcaptchaSecretKey: string | null;
                        recaptchaSecretKey: string | null;
                        turnstileSecretKey: string | null;
                        sensitiveMediaDetection: 'none' | 'all' | 'local' | 'remote';
                        sensitiveMediaDetectionSensitivity: 'medium' | 'low' | 'high' | 'veryLow' | 'veryHigh';
                        setSensitiveFlagAutomatically: boolean;
                        enableSensitiveMediaDetectionForVideos: boolean;
                        proxyAccountId: string | null;
                        email: string | null;
                        smtpSecure: boolean;
                        smtpHost: string | null;
                        smtpPort: number | null;
                        smtpUser: string | null;
                        smtpPass: string | null;
                        useObjectStorage: boolean;
                        objectStorageBaseUrl: string | null;
                        objectStorageBucket: string | null;
                        objectStoragePrefix: string | null;
                        objectStorageEndpoint: string | null;
                        objectStorageRegion: string | null;
                        objectStoragePort: number | null;
                        objectStorageAccessKey: string | null;
                        objectStorageSecretKey: string | null;
                        objectStorageUseSSL: boolean;
                        objectStorageUseProxy: boolean;
                        objectStorageSetPublicRead: boolean;
                        enableIpLogging: boolean;
                        enableActiveEmailValidation: boolean;
                        enableVerifymailApi: boolean;
                        verifymailAuthKey: string | null;
                        enableTruemailApi: boolean;
                        truemailInstance: string | null;
                        truemailAuthKey: string | null;
                        enableChartsForFederatedInstances: boolean;
                        enableServerMachineStats: boolean;
                        manifestJsonOverride: string;
                        policies: Record<string, never>;
                        enableFanoutTimeline: boolean;
                        enableFanoutTimelineDbFallback: boolean;
                        perLocalUserUserTimelineCacheMax: number;
                        perRemoteUserUserTimelineCacheMax: number;
                        perUserHomeTimelineCacheMax: number;
                        perUserListTimelineCacheMax: number;
                        backgroundImageUrl: string | null;
                        deeplAuthKey: string | null;
                        deeplIsPro: boolean;
                        defaultDarkTheme: string | null;
                        defaultLightTheme: string | null;
                        description: string | null;
                        disableRegistration: boolean;
                        feedbackUrl: string | null;
                        impressumUrl: string | null;
                        maintainerEmail: string | null;
                        maintainerName: string | null;
                        name: string | null;
                        shortName: string | null;
                        objectStorageS3ForcePathStyle: boolean;
                        privacyPolicyUrl: string | null;
                        inquiryUrl: string | null;
                        repositoryUrl: string | null;
                        summalyProxy: string | null;
                        themeColor: string | null;
                        tosUrl: string | null;
                        uri: string;
                        version: string;
                        urlPreviewEnabled: boolean;
                        urlPreviewTimeout: number;
                        urlPreviewMaximumContentLength: number;
                        urlPreviewRequireContentLength: boolean;
                        urlPreviewUserAgent: string | null;
                        urlPreviewSummaryProxyUrl: string | null;
                        federation: 'all' | 'none' | 'specified';
                        federationHosts: string[];
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    admin___accounts___create: {
        requestBody: {
            content: {
                'application/json': {
                    username: string;
                    password: string;
                    setupPassword?: string | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['MeDetailed'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    admin___accounts___delete: {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___accounts___find-by-email': {
        requestBody: {
            content: {
                'application/json': {
                    email: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['UserDetailedNotMe'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___avatar-decorations___create': {
        requestBody: {
            content: {
                'application/json': {
                    name: string;
                    description: string;
                    url: string;
                    roleIdsThatCanBeUsedThisDecoration?: string[];
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___avatar-decorations___delete': {
        requestBody: {
            content: {
                'application/json': {
                    id: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___avatar-decorations___list': {
        requestBody: {
            content: {
                'application/json': {
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                    userId?: string | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': ({
                        id: string;
                        createdAt: string;
                        updatedAt: string | null;
                        name: string;
                        description: string;
                        url: string;
                        roleIdsThatCanBeUsedThisDecoration: string[];
                    })[];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___avatar-decorations___update': {
        requestBody: {
            content: {
                'application/json': {
                    id: string;
                    name?: string;
                    description?: string;
                    url?: string;
                    roleIdsThatCanBeUsedThisDecoration?: string[];
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___delete-all-files-of-a-user': {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___unset-user-avatar': {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___unset-user-banner': {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___drive___clean-remote-files': {
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    admin___drive___cleanup: {
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    admin___drive___files: {
        requestBody: {
            content: {
                'application/json': {
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                    userId?: string | null;
                    type?: string | null;
                    origin?: 'combined' | 'local' | 'remote';
                    hostname?: string | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['DriveFile'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___drive___show-file': {
        requestBody: {
            content: {
                'application/json': {
                    fileId?: string;
                    url?: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        id: string;
                        createdAt: string;
                        userId: string | null;
                        userHost: string | null;
                        md5: string;
                        name: string;
                        type: string;
                        size: number;
                        comment: string | null;
                        blurhash: string | null;
                        properties: {
                            width?: number;
                            height?: number;
                            orientation?: number;
                            avgColor?: string;
                        };
                        storedInternal: boolean | null;
                        url: string | null;
                        thumbnailUrl: string | null;
                        webpublicUrl: string | null;
                        accessKey: string | null;
                        thumbnailAccessKey: string | null;
                        webpublicAccessKey: string | null;
                        uri: string | null;
                        src: string | null;
                        folderId: string | null;
                        isSensitive: boolean;
                        isLink: boolean;
                        requestIp: string | null;
                        requestHeaders: {
                            [key: string]: string;
                        } | null;
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___emoji___add-aliases-bulk': {
        requestBody: {
            content: {
                'application/json': {
                    ids: string[];
                    aliases: string[];
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___emoji___add-tags-bulk': {
        requestBody: {
            content: {
                'application/json': {
                    ids: string[];
                    tags: string[];
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    admin___emoji___add: {
        requestBody: {
            content: {
                'application/json': {
                    name: string;
                    fileId: string;
                    category?: string | null;
                    aliases?: string[];
                    tags?: string[];
                    license?: string | null;
                    isSensitive?: boolean;
                    localOnly?: boolean;
                    roleIdsThatCanBeUsedThisEmojiAsReaction?: string[];
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['EmojiDetailed'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    admin___emoji___copy: {
        requestBody: {
            content: {
                'application/json': {
                    emojiId: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        id: string;
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___emoji___delete-bulk': {
        requestBody: {
            content: {
                'application/json': {
                    ids: string[];
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    admin___emoji___delete: {
        requestBody: {
            content: {
                'application/json': {
                    id: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___emoji___import-zip': {
        requestBody: {
            content: {
                'application/json': {
                    fileId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___emoji___list-remote': {
        requestBody: {
            content: {
                'application/json': {
                    query?: string | null;
                    host?: string | null;
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': ({
                        id: string;
                        aliases: string[];
                        name: string;
                        category: string | null;
                        host: string | null;
                        url: string;
                    })[];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    admin___emoji___list: {
        requestBody: {
            content: {
                'application/json': {
                    query?: string | null;
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': ({
                        id: string;
                        aliases: string[];
                        tags: string[];
                        name: string;
                        category: string | null;
                        host: string | null;
                        url: string;
                    })[];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___emoji___remove-aliases-bulk': {
        requestBody: {
            content: {
                'application/json': {
                    ids: string[];
                    aliases: string[];
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___emoji___remove-tags-bulk': {
        requestBody: {
            content: {
                'application/json': {
                    ids: string[];
                    tags: string[];
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___emoji___set-aliases-bulk': {
        requestBody: {
            content: {
                'application/json': {
                    ids: string[];
                    aliases: string[];
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___emoji___set-tags-bulk': {
        requestBody: {
            content: {
                'application/json': {
                    ids: string[];
                    tags: string[];
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___emoji___set-category-bulk': {
        requestBody: {
            content: {
                'application/json': {
                    ids: string[];
                    category?: string | null;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___emoji___set-license-bulk': {
        requestBody: {
            content: {
                'application/json': {
                    ids: string[];
                    license?: string | null;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    admin___emoji___update: {
        requestBody: {
            content: {
                'application/json': {
                    id?: string;
                    name?: string;
                    fileId?: string;
                    category?: string | null;
                    aliases?: string[];
                    tags?: string[];
                    license?: string | null;
                    isSensitive?: boolean;
                    localOnly?: boolean;
                    roleIdsThatCanBeUsedThisEmojiAsReaction?: string[];
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___federation___delete-all-files': {
        requestBody: {
            content: {
                'application/json': {
                    host: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___federation___refresh-remote-instance-metadata': {
        requestBody: {
            content: {
                'application/json': {
                    host: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___federation___remove-all-following': {
        requestBody: {
            content: {
                'application/json': {
                    host: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___federation___update-instance': {
        requestBody: {
            content: {
                'application/json': {
                    host: string;
                    isSuspended?: boolean;
                    moderationNote?: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___get-index-stats': {
        responses: {
            200: {
                content: {
                    'application/json': {
                        tablename: string;
                        indexname: string;
                    }[];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___get-table-stats': {
        responses: {
            200: {
                content: {
                    'application/json': {
                        [key: string]: {
                            count: number;
                            size: number;
                        };
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___get-user-ips': {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        ip: string;
                        createdAt: string;
                    }[];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    admin___invite___create: {
        requestBody: {
            content: {
                'application/json': {
                    count?: number;
                    expiresAt?: string | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['InviteCode'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    admin___invite___list: {
        requestBody: {
            content: {
                'application/json': {
                    limit?: number;
                    offset?: number;
                    type?: 'unused' | 'used' | 'expired' | 'all';
                    sort?: '+createdAt' | '-createdAt' | '+usedAt' | '-usedAt';
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['InviteCode'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    admin___queue___clear: {
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___queue___deliver-delayed': {
        responses: {
            200: {
                content: {
                    'application/json': ((string | number)[])[];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___queue___inbox-delayed': {
        responses: {
            200: {
                content: {
                    'application/json': ((string | number)[])[];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    admin___queue___promote: {
        requestBody: {
            content: {
                'application/json': {
                    type: 'deliver' | 'inbox';
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    admin___queue___stats: {
        responses: {
            200: {
                content: {
                    'application/json': {
                        deliver: components['schemas']['QueueCount'];
                        inbox: components['schemas']['QueueCount'];
                        db: components['schemas']['QueueCount'];
                        objectStorage: components['schemas']['QueueCount'];
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    admin___relays___add: {
        requestBody: {
            content: {
                'application/json': {
                    inbox: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        id: string;
                        inbox: string;
                        status: 'requesting' | 'accepted' | 'rejected';
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    admin___relays___list: {
        responses: {
            200: {
                content: {
                    'application/json': ({
                        id: string;
                        inbox: string;
                        status: 'requesting' | 'accepted' | 'rejected';
                    })[];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    admin___relays___remove: {
        requestBody: {
            content: {
                'application/json': {
                    inbox: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___reset-password': {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        password: string;
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___send-email': {
        requestBody: {
            content: {
                'application/json': {
                    to: string;
                    subject: string;
                    text: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___server-info': {
        responses: {
            200: {
                content: {
                    'application/json': {
                        machine: string;
                        os: string;
                        node: string;
                        psql: string;
                        cpu: {
                            model: string;
                            cores: number;
                        };
                        mem: {
                            total: number;
                        };
                        fs: {
                            total: number;
                            used: number;
                        };
                        net: {
                            interface: string;
                        };
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___show-user': {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        email: string | null;
                        emailVerified: boolean;
                        autoAcceptFollowed: boolean;
                        noCrawle: boolean;
                        preventAiLearning: boolean;
                        alwaysMarkNsfw: boolean;
                        autoSensitive: boolean;
                        carefulBot: boolean;
                        receiveAnnouncementEmail: boolean;
                        mutedWords: (string | string[])[];
                        mutedInstances: string[];
                        notificationRecieveConfig: {
                            note?: OneOf<[
                                {
                                    type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                                },
                                {
                                    type: 'list';
                                    userListId: string;
                                }
                            ]>;
                            follow?: OneOf<[
                                {
                                    type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                                },
                                {
                                    type: 'list';
                                    userListId: string;
                                }
                            ]>;
                            mention?: OneOf<[
                                {
                                    type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                                },
                                {
                                    type: 'list';
                                    userListId: string;
                                }
                            ]>;
                            reply?: OneOf<[
                                {
                                    type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                                },
                                {
                                    type: 'list';
                                    userListId: string;
                                }
                            ]>;
                            renote?: OneOf<[
                                {
                                    type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                                },
                                {
                                    type: 'list';
                                    userListId: string;
                                }
                            ]>;
                            quote?: OneOf<[
                                {
                                    type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                                },
                                {
                                    type: 'list';
                                    userListId: string;
                                }
                            ]>;
                            reaction?: OneOf<[
                                {
                                    type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                                },
                                {
                                    type: 'list';
                                    userListId: string;
                                }
                            ]>;
                            pollEnded?: OneOf<[
                                {
                                    type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                                },
                                {
                                    type: 'list';
                                    userListId: string;
                                }
                            ]>;
                            receiveFollowRequest?: OneOf<[
                                {
                                    type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                                },
                                {
                                    type: 'list';
                                    userListId: string;
                                }
                            ]>;
                            followRequestAccepted?: OneOf<[
                                {
                                    type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                                },
                                {
                                    type: 'list';
                                    userListId: string;
                                }
                            ]>;
                            roleAssigned?: OneOf<[
                                {
                                    type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                                },
                                {
                                    type: 'list';
                                    userListId: string;
                                }
                            ]>;
                            app?: OneOf<[
                                {
                                    type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                                },
                                {
                                    type: 'list';
                                    userListId: string;
                                }
                            ]>;
                            test?: OneOf<[
                                {
                                    type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                                },
                                {
                                    type: 'list';
                                    userListId: string;
                                }
                            ]>;
                        };
                        isModerator: boolean;
                        isSilenced: boolean;
                        isSuspended: boolean;
                        moderationNote: string;
                        signins: components['schemas']['Signin'][];
                        policies: components['schemas']['RolePolicies'];
                        roles: components['schemas']['Role'][];
                        roleAssigns: ({
                            createdAt: string;
                            expiresAt: string | null;
                            roleId: string;
                        })[];
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___show-users': {
        requestBody: {
            content: {
                'application/json': {
                    limit?: number;
                    offset?: number;
                    sort?: '+follower' | '-follower' | '+createdAt' | '-createdAt' | '+updatedAt' | '-updatedAt';
                    state?: 'all' | 'alive' | 'available' | 'admin' | 'moderator' | 'adminOrModerator' | 'suspended';
                    origin?: 'combined' | 'local' | 'remote';
                    username?: string | null;
                    hostname?: string | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['UserDetailed'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___suspend-user': {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___unsuspend-user': {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___update-meta': {
        requestBody: {
            content: {
                'application/json': {
                    disableRegistration?: boolean | null;
                    pinnedUsers?: string[] | null;
                    blockedHosts?: string[] | null;
                    sensitiveWords?: string[] | null;
                    prohibitedWords?: string[] | null;
                    prohibitedWordsForNameOfUser?: string[] | null;
                    themeColor?: string | null;
                    mascotImageUrl?: string | null;
                    bannerUrl?: string | null;
                    serverErrorImageUrl?: string | null;
                    infoImageUrl?: string | null;
                    notFoundImageUrl?: string | null;
                    iconUrl?: string | null;
                    app192IconUrl?: string | null;
                    app512IconUrl?: string | null;
                    backgroundImageUrl?: string | null;
                    logoImageUrl?: string | null;
                    name?: string | null;
                    shortName?: string | null;
                    description?: string | null;
                    defaultLightTheme?: string | null;
                    defaultDarkTheme?: string | null;
                    cacheRemoteFiles?: boolean;
                    cacheRemoteSensitiveFiles?: boolean;
                    emailRequiredForSignup?: boolean;
                    enableHcaptcha?: boolean;
                    hcaptchaSiteKey?: string | null;
                    hcaptchaSecretKey?: string | null;
                    enableMcaptcha?: boolean;
                    mcaptchaSiteKey?: string | null;
                    mcaptchaInstanceUrl?: string | null;
                    mcaptchaSecretKey?: string | null;
                    enableRecaptcha?: boolean;
                    recaptchaSiteKey?: string | null;
                    recaptchaSecretKey?: string | null;
                    enableTurnstile?: boolean;
                    turnstileSiteKey?: string | null;
                    turnstileSecretKey?: string | null;
                    enableTestcaptcha?: boolean;
                    sensitiveMediaDetection?: 'none' | 'all' | 'local' | 'remote';
                    sensitiveMediaDetectionSensitivity?: 'medium' | 'low' | 'high' | 'veryLow' | 'veryHigh';
                    setSensitiveFlagAutomatically?: boolean;
                    enableSensitiveMediaDetectionForVideos?: boolean;
                    proxyAccountId?: string | null;
                    maintainerName?: string | null;
                    maintainerEmail?: string | null;
                    langs?: string[];
                    deeplAuthKey?: string | null;
                    deeplIsPro?: boolean;
                    enableEmail?: boolean;
                    email?: string | null;
                    smtpSecure?: boolean;
                    smtpHost?: string | null;
                    smtpPort?: number | null;
                    smtpUser?: string | null;
                    smtpPass?: string | null;
                    tosUrl?: string | null;
                    repositoryUrl?: string | null;
                    feedbackUrl?: string | null;
                    impressumUrl?: string | null;
                    privacyPolicyUrl?: string | null;
                    inquiryUrl?: string | null;
                    useObjectStorage?: boolean;
                    objectStorageBaseUrl?: string | null;
                    objectStorageBucket?: string | null;
                    objectStoragePrefix?: string | null;
                    objectStorageEndpoint?: string | null;
                    objectStorageRegion?: string | null;
                    objectStoragePort?: number | null;
                    objectStorageAccessKey?: string | null;
                    objectStorageSecretKey?: string | null;
                    objectStorageUseSSL?: boolean;
                    objectStorageUseProxy?: boolean;
                    objectStorageSetPublicRead?: boolean;
                    objectStorageS3ForcePathStyle?: boolean;
                    enableIpLogging?: boolean;
                    enableActiveEmailValidation?: boolean;
                    enableVerifymailApi?: boolean;
                    verifymailAuthKey?: string | null;
                    enableTruemailApi?: boolean;
                    truemailInstance?: string | null;
                    truemailAuthKey?: string | null;
                    enableChartsForFederatedInstances?: boolean;
                    enableServerMachineStats?: boolean;
                    serverRules?: string[];
                    bannedEmailDomains?: string[];
                    preservedUsernames?: string[];
                    manifestJsonOverride?: string;
                    enableFanoutTimeline?: boolean;
                    enableFanoutTimelineDbFallback?: boolean;
                    perLocalUserUserTimelineCacheMax?: number;
                    perRemoteUserUserTimelineCacheMax?: number;
                    perUserHomeTimelineCacheMax?: number;
                    perUserListTimelineCacheMax?: number;
                    silencedHosts?: string[] | null;
                    mediaSilencedHosts?: string[] | null;
                    summalyProxy?: string | null;
                    urlPreviewEnabled?: boolean;
                    urlPreviewTimeout?: number;
                    urlPreviewMaximumContentLength?: number;
                    urlPreviewRequireContentLength?: boolean;
                    urlPreviewUserAgent?: string | null;
                    urlPreviewSummaryProxyUrl?: string | null;
                    federation?: 'all' | 'none' | 'specified';
                    federationHosts?: string[];
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___delete-account': {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___update-user-note': {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                    text: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    admin___roles___create: {
        requestBody: {
            content: {
                'application/json': {
                    name: string;
                    description: string;
                    color: string | null;
                    iconUrl: string | null;
                    target: 'manual' | 'conditional';
                    condFormula: Record<string, never>;
                    isPublic: boolean;
                    isModerator: boolean;
                    isAdministrator: boolean;
                    isExplorable?: boolean;
                    asBadge: boolean;
                    canEditMembersByModerator: boolean;
                    displayOrder: number;
                    policies: Record<string, never>;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Role'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    admin___roles___delete: {
        requestBody: {
            content: {
                'application/json': {
                    roleId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    admin___roles___list: {
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Role'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    admin___roles___show: {
        requestBody: {
            content: {
                'application/json': {
                    roleId: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Role'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    admin___roles___update: {
        requestBody: {
            content: {
                'application/json': {
                    roleId: string;
                    name?: string;
                    description?: string;
                    color?: string | null;
                    iconUrl?: string | null;
                    target?: 'manual' | 'conditional';
                    condFormula?: Record<string, never>;
                    isPublic?: boolean;
                    isModerator?: boolean;
                    isAdministrator?: boolean;
                    isExplorable?: boolean;
                    asBadge?: boolean;
                    canEditMembersByModerator?: boolean;
                    displayOrder?: number;
                    policies?: Record<string, never>;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    admin___roles___assign: {
        requestBody: {
            content: {
                'application/json': {
                    roleId: string;
                    userId: string;
                    expiresAt?: number | null;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    admin___roles___unassign: {
        requestBody: {
            content: {
                'application/json': {
                    roleId: string;
                    userId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'admin___roles___update-default-policies': {
        requestBody: {
            content: {
                'application/json': {
                    policies: Record<string, never>;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    admin___roles___users: {
        requestBody: {
            content: {
                'application/json': {
                    roleId: string;
                    sinceId?: string;
                    untilId?: string;
                    limit?: number;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': ({
                        id: string;
                        createdAt: string;
                        user: components['schemas']['UserDetailed'];
                        expiresAt: string | null;
                    })[];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    antennas___create: {
        requestBody: {
            content: {
                'application/json': {
                    name: string;
                    src: 'home' | 'all' | 'users' | 'list' | 'users_blacklist';
                    userListId?: string | null;
                    keywords: string[][];
                    excludeKeywords: string[][];
                    users: string[];
                    caseSensitive: boolean;
                    localOnly?: boolean;
                    excludeBots?: boolean;
                    withReplies: boolean;
                    withFile: boolean;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Antenna'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    antennas___delete: {
        requestBody: {
            content: {
                'application/json': {
                    antennaId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    antennas___list: {
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Antenna'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    antennas___notes: {
        requestBody: {
            content: {
                'application/json': {
                    antennaId: string;
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                    sinceDate?: number;
                    untilDate?: number;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Note'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    antennas___show: {
        requestBody: {
            content: {
                'application/json': {
                    antennaId: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Antenna'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    antennas___update: {
        requestBody: {
            content: {
                'application/json': {
                    antennaId: string;
                    name?: string;
                    src?: 'home' | 'all' | 'users' | 'list' | 'users_blacklist';
                    userListId?: string | null;
                    keywords?: string[][];
                    excludeKeywords?: string[][];
                    users?: string[];
                    caseSensitive?: boolean;
                    localOnly?: boolean;
                    excludeBots?: boolean;
                    withReplies?: boolean;
                    withFile?: boolean;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Antenna'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    ap___get: {
        requestBody: {
            content: {
                'application/json': {
                    uri: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': Record<string, never>;
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    ap___show: {
        requestBody: {
            content: {
                'application/json': {
                    uri: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': OneOf<[
                        {
                            type: 'User';
                            object: components['schemas']['UserDetailedNotMe'];
                        },
                        {
                            type: 'Note';
                            object: components['schemas']['Note'];
                        }
                    ]>;
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    app___create: {
        requestBody: {
            content: {
                'application/json': {
                    name: string;
                    description: string;
                    permission: string[];
                    callbackUrl?: string | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['App'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    app___show: {
        requestBody: {
            content: {
                'application/json': {
                    appId: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['App'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    auth___accept: {
        requestBody: {
            content: {
                'application/json': {
                    token: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    auth___session___generate: {
        requestBody: {
            content: {
                'application/json': {
                    appSecret: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        token: string;
                        url: string;
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    auth___session___show: {
        requestBody: {
            content: {
                'application/json': {
                    token: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        id: string;
                        app: components['schemas']['App'];
                        token: string;
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    auth___session___userkey: {
        requestBody: {
            content: {
                'application/json': {
                    appSecret: string;
                    token: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        accessToken: string;
                        user: components['schemas']['UserDetailedNotMe'];
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    blocking___create: {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['UserDetailedNotMe'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    blocking___delete: {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['UserDetailedNotMe'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    blocking___list: {
        requestBody: {
            content: {
                'application/json': {
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Blocking'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    channels___create: {
        requestBody: {
            content: {
                'application/json': {
                    name: string;
                    description?: string | null;
                    bannerId?: string | null;
                    color?: string;
                    isSensitive?: boolean | null;
                    allowRenoteToExternal?: boolean | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Channel'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    channels___follow: {
        requestBody: {
            content: {
                'application/json': {
                    channelId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    channels___followed: {
        requestBody: {
            content: {
                'application/json': {
                    sinceId?: string;
                    untilId?: string;
                    limit?: number;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Channel'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    channels___owned: {
        requestBody: {
            content: {
                'application/json': {
                    sinceId?: string;
                    untilId?: string;
                    limit?: number;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Channel'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    channels___show: {
        requestBody: {
            content: {
                'application/json': {
                    channelId: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Channel'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    channels___timeline: {
        requestBody: {
            content: {
                'application/json': {
                    channelId: string;
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                    sinceDate?: number;
                    untilDate?: number;
                    allowPartial?: boolean;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Note'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    channels___unfollow: {
        requestBody: {
            content: {
                'application/json': {
                    channelId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    channels___update: {
        requestBody: {
            content: {
                'application/json': {
                    channelId: string;
                    name?: string;
                    description?: string | null;
                    bannerId?: string | null;
                    isArchived?: boolean | null;
                    pinnedNoteIds?: string[];
                    color?: string;
                    isSensitive?: boolean | null;
                    allowRenoteToExternal?: boolean | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Channel'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    channels___favorite: {
        requestBody: {
            content: {
                'application/json': {
                    channelId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    channels___unfavorite: {
        requestBody: {
            content: {
                'application/json': {
                    channelId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'channels___my-favorites': {
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Channel'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    channels___search: {
        requestBody: {
            content: {
                'application/json': {
                    query: string;
                    type?: 'nameAndDescription' | 'nameOnly';
                    sinceId?: string;
                    untilId?: string;
                    limit?: number;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Channel'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'charts___ap-request': {
        requestBody: {
            content: {
                'application/json': {
                    span: 'day' | 'hour';
                    limit?: number;
                    offset?: number | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        deliverFailed: number[];
                        deliverSucceeded: number[];
                        inboxReceived: number[];
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    charts___drive: {
        requestBody: {
            content: {
                'application/json': {
                    span: 'day' | 'hour';
                    limit?: number;
                    offset?: number | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        local: {
                            incCount: number[];
                            incSize: number[];
                            decCount: number[];
                            decSize: number[];
                        };
                        remote: {
                            incCount: number[];
                            incSize: number[];
                            decCount: number[];
                            decSize: number[];
                        };
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    charts___federation: {
        requestBody: {
            content: {
                'application/json': {
                    span: 'day' | 'hour';
                    limit?: number;
                    offset?: number | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        deliveredInstances: number[];
                        inboxInstances: number[];
                        stalled: number[];
                        sub: number[];
                        pub: number[];
                        pubsub: number[];
                        subActive: number[];
                        pubActive: number[];
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    charts___instance: {
        requestBody: {
            content: {
                'application/json': {
                    span: 'day' | 'hour';
                    limit?: number;
                    offset?: number | null;
                    host: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        requests: {
                            failed: number[];
                            succeeded: number[];
                            received: number[];
                        };
                        notes: {
                            total: number[];
                            inc: number[];
                            dec: number[];
                            diffs: {
                                normal: number[];
                                reply: number[];
                                renote: number[];
                                withFile: number[];
                            };
                        };
                        users: {
                            total: number[];
                            inc: number[];
                            dec: number[];
                        };
                        following: {
                            total: number[];
                            inc: number[];
                            dec: number[];
                        };
                        followers: {
                            total: number[];
                            inc: number[];
                            dec: number[];
                        };
                        drive: {
                            totalFiles: number[];
                            incFiles: number[];
                            decFiles: number[];
                            incUsage: number[];
                            decUsage: number[];
                        };
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    charts___notes: {
        requestBody: {
            content: {
                'application/json': {
                    span: 'day' | 'hour';
                    limit?: number;
                    offset?: number | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        local: {
                            total: number[];
                            inc: number[];
                            dec: number[];
                            diffs: {
                                normal: number[];
                                reply: number[];
                                renote: number[];
                                withFile: number[];
                            };
                        };
                        remote: {
                            total: number[];
                            inc: number[];
                            dec: number[];
                            diffs: {
                                normal: number[];
                                reply: number[];
                                renote: number[];
                                withFile: number[];
                            };
                        };
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    charts___users: {
        requestBody: {
            content: {
                'application/json': {
                    span: 'day' | 'hour';
                    limit?: number;
                    offset?: number | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        local: {
                            total: number[];
                            inc: number[];
                            dec: number[];
                        };
                        remote: {
                            total: number[];
                            inc: number[];
                            dec: number[];
                        };
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'clips___add-note': {
        requestBody: {
            content: {
                'application/json': {
                    clipId: string;
                    noteId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'clips___remove-note': {
        requestBody: {
            content: {
                'application/json': {
                    clipId: string;
                    noteId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    clips___create: {
        requestBody: {
            content: {
                'application/json': {
                    name: string;
                    isPublic?: boolean;
                    description?: string | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Clip'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    clips___delete: {
        requestBody: {
            content: {
                'application/json': {
                    clipId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    clips___list: {
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Clip'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    clips___notes: {
        requestBody: {
            content: {
                'application/json': {
                    clipId: string;
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Note'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    clips___show: {
        requestBody: {
            content: {
                'application/json': {
                    clipId: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Clip'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    clips___update: {
        requestBody: {
            content: {
                'application/json': {
                    clipId: string;
                    name?: string;
                    isPublic?: boolean;
                    description?: string | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Clip'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    clips___favorite: {
        requestBody: {
            content: {
                'application/json': {
                    clipId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    clips___unfavorite: {
        requestBody: {
            content: {
                'application/json': {
                    clipId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'clips___my-favorites': {
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Clip'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    drive: {
        responses: {
            200: {
                content: {
                    'application/json': {
                        capacity: number;
                        usage: number;
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    drive___files: {
        requestBody: {
            content: {
                'application/json': {
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                    folderId?: string | null;
                    type?: string | null;
                    sort?: '+createdAt' | '-createdAt' | '+name' | '-name' | '+size' | '-size' | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['DriveFile'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'drive___files___attached-notes': {
        requestBody: {
            content: {
                'application/json': {
                    sinceId?: string;
                    untilId?: string;
                    limit?: number;
                    fileId: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Note'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'drive___files___check-existence': {
        requestBody: {
            content: {
                'application/json': {
                    md5: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': boolean;
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    drive___files___create: {
        requestBody: {
            content: {
                'multipart/form-data': {
                    folderId?: string | null;
                    name?: string | null;
                    comment?: string | null;
                    isSensitive?: boolean;
                    force?: boolean;
                    file: Blob;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['DriveFile'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    drive___files___delete: {
        requestBody: {
            content: {
                'application/json': {
                    fileId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'drive___files___find-by-hash': {
        requestBody: {
            content: {
                'application/json': {
                    md5: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['DriveFile'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    drive___files___find: {
        requestBody: {
            content: {
                'application/json': {
                    name: string;
                    folderId?: string | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['DriveFile'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    drive___files___show: {
        requestBody: {
            content: {
                'application/json': {
                    fileId?: string;
                    url?: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['DriveFile'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    drive___files___update: {
        requestBody: {
            content: {
                'application/json': {
                    fileId: string;
                    folderId?: string | null;
                    name?: string;
                    isSensitive?: boolean;
                    comment?: string | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['DriveFile'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'drive___files___upload-from-url': {
        requestBody: {
            content: {
                'application/json': {
                    url: string;
                    folderId?: string | null;
                    isSensitive?: boolean;
                    comment?: string | null;
                    marker?: string | null;
                    force?: boolean;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    drive___folders: {
        requestBody: {
            content: {
                'application/json': {
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                    folderId?: string | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['DriveFolder'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    drive___folders___create: {
        requestBody: {
            content: {
                'application/json': {
                    name?: string;
                    parentId?: string | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['DriveFolder'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    drive___folders___delete: {
        requestBody: {
            content: {
                'application/json': {
                    folderId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    drive___folders___find: {
        requestBody: {
            content: {
                'application/json': {
                    name: string;
                    parentId?: string | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['DriveFolder'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    drive___folders___show: {
        requestBody: {
            content: {
                'application/json': {
                    folderId: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['DriveFolder'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    drive___folders___update: {
        requestBody: {
            content: {
                'application/json': {
                    folderId: string;
                    name?: string;
                    parentId?: string | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['DriveFolder'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    drive___stream: {
        requestBody: {
            content: {
                'application/json': {
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                    type?: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['DriveFile'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'email-address___available': {
        requestBody: {
            content: {
                'application/json': {
                    emailAddress: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        available: boolean;
                        reason: string | null;
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    endpoint: {
        requestBody: {
            content: {
                'application/json': {
                    endpoint: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        params: {
                            name: string;
                            type: string;
                        }[];
                    } | null;
                };
            };
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    endpoints: {
        responses: {
            200: {
                content: {
                    'application/json': string[];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'export-custom-emojis': {
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    federation___followers: {
        requestBody: {
            content: {
                'application/json': {
                    host: string;
                    sinceId?: string;
                    untilId?: string;
                    limit?: number;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Following'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    federation___following: {
        requestBody: {
            content: {
                'application/json': {
                    host: string;
                    sinceId?: string;
                    untilId?: string;
                    limit?: number;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Following'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    federation___instances: {
        requestBody: {
            content: {
                'application/json': {
                    host?: string | null;
                    blocked?: boolean | null;
                    notResponding?: boolean | null;
                    suspended?: boolean | null;
                    silenced?: boolean | null;
                    federating?: boolean | null;
                    subscribing?: boolean | null;
                    publishing?: boolean | null;
                    limit?: number;
                    offset?: number;
                    sort?: '+pubSub' | '-pubSub' | '+notes' | '-notes' | '+users' | '-users' | '+following' | '-following' | '+followers' | '-followers' | '+firstRetrievedAt' | '-firstRetrievedAt' | '+latestRequestReceivedAt' | '-latestRequestReceivedAt' | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['FederationInstance'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'federation___show-instance': {
        requestBody: {
            content: {
                'application/json': {
                    host: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['FederationInstance'] | null;
                };
            };
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'federation___update-remote-user': {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    federation___users: {
        requestBody: {
            content: {
                'application/json': {
                    host: string;
                    sinceId?: string;
                    untilId?: string;
                    limit?: number;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['UserDetailedNotMe'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    federation___stats: {
        requestBody: {
            content: {
                'application/json': {
                    limit?: number;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        topSubInstances: components['schemas']['FederationInstance'][];
                        otherFollowersCount: number;
                        topPubInstances: components['schemas']['FederationInstance'][];
                        otherFollowingCount: number;
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    following___create: {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                    withReplies?: boolean;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['UserLite'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    following___delete: {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['UserLite'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    following___update: {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                    notify?: 'normal' | 'none';
                    withReplies?: boolean;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['UserLite'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'following___update-all': {
        requestBody: {
            content: {
                'application/json': {
                    notify?: 'normal' | 'none';
                    withReplies?: boolean;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    following___invalidate: {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['UserLite'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    following___requests___accept: {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    following___requests___cancel: {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['UserLite'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    following___requests___list: {
        requestBody: {
            content: {
                'application/json': {
                    sinceId?: string;
                    untilId?: string;
                    limit?: number;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        id: string;
                        follower: components['schemas']['UserLite'];
                        followee: components['schemas']['UserLite'];
                    }[];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    following___requests___reject: {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'get-avatar-decorations': {
        responses: {
            200: {
                content: {
                    'application/json': {
                        id: string;
                        name: string;
                        description: string;
                        url: string;
                        roleIdsThatCanBeUsedThisDecoration: string[];
                    }[];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    hashtags___list: {
        requestBody: {
            content: {
                'application/json': {
                    limit?: number;
                    attachedToUserOnly?: boolean;
                    attachedToLocalUserOnly?: boolean;
                    attachedToRemoteUserOnly?: boolean;
                    sort: '+mentionedUsers' | '-mentionedUsers' | '+mentionedLocalUsers' | '-mentionedLocalUsers' | '+mentionedRemoteUsers' | '-mentionedRemoteUsers' | '+attachedUsers' | '-attachedUsers' | '+attachedLocalUsers' | '-attachedLocalUsers' | '+attachedRemoteUsers' | '-attachedRemoteUsers';
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Hashtag'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    hashtags___search: {
        requestBody: {
            content: {
                'application/json': {
                    limit?: number;
                    query: string;
                    offset?: number;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': string[];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    hashtags___show: {
        requestBody: {
            content: {
                'application/json': {
                    tag: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Hashtag'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    hashtags___users: {
        requestBody: {
            content: {
                'application/json': {
                    tag: string;
                    limit?: number;
                    sort: '+follower' | '-follower' | '+createdAt' | '-createdAt' | '+updatedAt' | '-updatedAt';
                    state?: 'all' | 'alive';
                    origin?: 'combined' | 'local' | 'remote';
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['UserDetailed'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    i: {
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['MeDetailed'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    i___2fa___done: {
        requestBody: {
            content: {
                'application/json': {
                    token: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        backupCodes: string[];
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'i___2fa___key-done': {
        requestBody: {
            content: {
                'application/json': {
                    password: string;
                    token?: string | null;
                    name: string;
                    credential: {
                        id: string;
                        rawId: string;
                        response: {
                            clientDataJSON: string;
                            attestationObject: string;
                            authenticationData?: string;
                            transports?: ('ble' | 'cable' | 'hybrid' | 'internal' | 'nfc' | 'smart-card' | 'usb')[];
                            publicKeyAlgorithm?: number;
                            publicKey?: string;
                        };
                        authenticatorAttachment?: 'cross-platform' | 'platform';
                        clientExtensionResults: {
                            appId?: boolean;
                            hmacCreateSecret?: boolean;
                            credProps?: {
                                rk?: boolean;
                            };
                        };
                        type: 'public-key';
                    };
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        id: string;
                        name: string;
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'i___2fa___password-less': {
        requestBody: {
            content: {
                'application/json': {
                    value: boolean;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'i___2fa___register-key': {
        requestBody: {
            content: {
                'application/json': {
                    password: string;
                    token?: string | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        rp: {
                            id?: string;
                            name: string;
                        };
                        user: {
                            id: string;
                            name: string;
                            displayName: string;
                        };
                        challenge: string;
                        pubKeyCredParams: {
                            type: 'public-key';
                            alg: number;
                        }[];
                        timeout?: number;
                        excludeCredentials?: ({
                            id: string;
                            type: 'public-key';
                            transports: ('ble' | 'cable' | 'hybrid' | 'internal' | 'nfc' | 'smart-card' | 'usb')[];
                        })[];
                        authenticatorSelection: ({
                            authenticatorAttachment: 'cross-platform' | 'platform';
                            requireResidentKey: boolean;
                            userVerification: 'discouraged' | 'preferred' | 'required';
                        }) | null;
                        attestation: 'direct' | 'enterprise' | 'indirect' | 'none' | null;
                        extensions: ({
                            appid: string | null;
                            credProps: boolean | null;
                            hmacCreateSecret: boolean | null;
                        }) | null;
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    i___2fa___register: {
        requestBody: {
            content: {
                'application/json': {
                    password: string;
                    token?: string | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        qr: string;
                        url: string;
                        secret: string;
                        label: string;
                        issuer: string;
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'i___2fa___update-key': {
        requestBody: {
            content: {
                'application/json': {
                    name: string;
                    credentialId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'i___2fa___remove-key': {
        requestBody: {
            content: {
                'application/json': {
                    password: string;
                    token?: string | null;
                    credentialId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    i___2fa___unregister: {
        requestBody: {
            content: {
                'application/json': {
                    password: string;
                    token?: string | null;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    i___apps: {
        requestBody: {
            content: {
                'application/json': {
                    sort?: '+createdAt' | '-createdAt' | '+lastUsedAt' | '-lastUsedAt';
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': ({
                        id: string;
                        name?: string;
                        createdAt: string;
                        lastUsedAt?: string;
                        description: string | null;
                        iconUrl: string | null;
                        permission: string[];
                    })[];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'i___authorized-apps': {
        requestBody: {
            content: {
                'application/json': {
                    limit?: number;
                    offset?: number;
                    sort?: 'desc' | 'asc';
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': ({
                        id: string;
                        name: string;
                        callbackUrl: string | null;
                        permission: string[];
                        isAuthorized?: boolean;
                    })[];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'i___change-password': {
        requestBody: {
            content: {
                'application/json': {
                    currentPassword: string;
                    newPassword: string;
                    token?: string | null;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'i___delete-account': {
        requestBody: {
            content: {
                'application/json': {
                    password: string;
                    token?: string | null;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'i___export-blocking': {
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'i___export-following': {
        requestBody: {
            content: {
                'application/json': {
                    excludeMuting?: boolean;
                    excludeInactive?: boolean;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'i___export-mute': {
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'i___export-notes': {
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'i___export-clips': {
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'i___export-user-lists': {
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'i___export-antennas': {
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'i___import-blocking': {
        requestBody: {
            content: {
                'application/json': {
                    fileId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'i___import-following': {
        requestBody: {
            content: {
                'application/json': {
                    fileId: string;
                    withReplies?: boolean;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'i___import-muting': {
        requestBody: {
            content: {
                'application/json': {
                    fileId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'i___import-user-lists': {
        requestBody: {
            content: {
                'application/json': {
                    fileId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'i___import-antennas': {
        requestBody: {
            content: {
                'application/json': {
                    fileId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    i___notifications: {
        requestBody: {
            content: {
                'application/json': {
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                    markAsRead?: boolean;
                    includeTypes?: ('note' | 'follow' | 'mention' | 'reply' | 'renote' | 'quote' | 'reaction' | 'pollEnded' | 'receiveFollowRequest' | 'followRequestAccepted' | 'roleAssigned' | 'app' | 'test' | 'pollVote' | 'groupInvited' | 'achievementEarned')[];
                    excludeTypes?: ('note' | 'follow' | 'mention' | 'reply' | 'renote' | 'quote' | 'reaction' | 'pollEnded' | 'receiveFollowRequest' | 'followRequestAccepted' | 'roleAssigned' | 'app' | 'test' | 'pollVote' | 'groupInvited' | 'achievementEarned')[];
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Notification'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'i___notifications-grouped': {
        requestBody: {
            content: {
                'application/json': {
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                    markAsRead?: boolean;
                    includeTypes?: ('note' | 'follow' | 'mention' | 'reply' | 'renote' | 'quote' | 'reaction' | 'pollEnded' | 'receiveFollowRequest' | 'followRequestAccepted' | 'roleAssigned' | 'app' | 'test' | 'reaction:grouped' | 'renote:grouped' | 'pollVote' | 'groupInvited' | 'achievementEarned')[];
                    excludeTypes?: ('note' | 'follow' | 'mention' | 'reply' | 'renote' | 'quote' | 'reaction' | 'pollEnded' | 'receiveFollowRequest' | 'followRequestAccepted' | 'roleAssigned' | 'app' | 'test' | 'reaction:grouped' | 'renote:grouped' | 'pollVote' | 'groupInvited' | 'achievementEarned')[];
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Notification'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    i___pin: {
        requestBody: {
            content: {
                'application/json': {
                    noteId: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['MeDetailed'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'i___read-all-unread-notes': {
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'i___regenerate-token': {
        requestBody: {
            content: {
                'application/json': {
                    password: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'i___registry___get-all': {
        requestBody: {
            content: {
                'application/json': {
                    scope: string[];
                    domain?: string | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': Record<string, never>;
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'i___registry___get-detail': {
        requestBody: {
            content: {
                'application/json': {
                    key: string;
                    scope: string[];
                    domain?: string | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        updatedAt: string;
                        value: unknown;
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    i___registry___get: {
        requestBody: {
            content: {
                'application/json': {
                    key: string;
                    scope: string[];
                    domain?: string | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': Record<string, never>;
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'i___registry___keys-with-type': {
        requestBody: {
            content: {
                'application/json': {
                    scope: string[];
                    domain?: string | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        [key: string]: string;
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    i___registry___keys: {
        requestBody: {
            content: {
                'application/json': {
                    scope: string[];
                    domain?: string | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': string[];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    i___registry___remove: {
        requestBody: {
            content: {
                'application/json': {
                    key: string;
                    scope: string[];
                    domain?: string | null;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'i___registry___scopes-with-domain': {
        responses: {
            200: {
                content: {
                    'application/json': ({
                        scopes: string[][];
                        domain: string | null;
                    })[];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    i___registry___set: {
        requestBody: {
            content: {
                'application/json': {
                    key: string;
                    value: unknown;
                    scope: string[];
                    domain?: string | null;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'i___revoke-token': {
        requestBody: {
            content: {
                'application/json': {
                    tokenId?: string;
                    token?: string | null;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'i___signin-history': {
        requestBody: {
            content: {
                'application/json': {
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Signin'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    i___unpin: {
        requestBody: {
            content: {
                'application/json': {
                    noteId: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['MeDetailed'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'i___update-email': {
        requestBody: {
            content: {
                'application/json': {
                    password: string;
                    email?: string | null;
                    token?: string | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['MeDetailed'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    i___update: {
        requestBody: {
            content: {
                'application/json': {
                    name?: string | null;
                    description?: string | null;
                    location?: string | null;
                    birthday?: string | null;
                    lang?: null | 'ach' | 'ady' | 'af' | 'af-NA' | 'af-ZA' | 'ak' | 'ar' | 'ar-AR' | 'ar-MA' | 'ar-SA' | 'ay-BO' | 'az' | 'az-AZ' | 'be-BY' | 'bg' | 'bg-BG' | 'bn' | 'bn-IN' | 'bn-BD' | 'br' | 'bs-BA' | 'ca' | 'ca-ES' | 'cak' | 'ck-US' | 'cs' | 'cs-CZ' | 'cy' | 'cy-GB' | 'da' | 'da-DK' | 'de' | 'de-AT' | 'de-DE' | 'de-CH' | 'dsb' | 'el' | 'el-GR' | 'en' | 'en-GB' | 'en-AU' | 'en-CA' | 'en-IE' | 'en-IN' | 'en-PI' | 'en-SG' | 'en-UD' | 'en-US' | 'en-ZA' | 'en@pirate' | 'eo' | 'eo-EO' | 'es' | 'es-AR' | 'es-419' | 'es-CL' | 'es-CO' | 'es-EC' | 'es-ES' | 'es-LA' | 'es-NI' | 'es-MX' | 'es-US' | 'es-VE' | 'et' | 'et-EE' | 'eu' | 'eu-ES' | 'fa' | 'fa-IR' | 'fb-LT' | 'ff' | 'fi' | 'fi-FI' | 'fo' | 'fo-FO' | 'fr' | 'fr-CA' | 'fr-FR' | 'fr-BE' | 'fr-CH' | 'fy-NL' | 'ga' | 'ga-IE' | 'gd' | 'gl' | 'gl-ES' | 'gn-PY' | 'gu-IN' | 'gv' | 'gx-GR' | 'he' | 'he-IL' | 'hi' | 'hi-IN' | 'hr' | 'hr-HR' | 'hsb' | 'ht' | 'hu' | 'hu-HU' | 'hy' | 'hy-AM' | 'id' | 'id-ID' | 'is' | 'is-IS' | 'it' | 'it-IT' | 'ja' | 'ja-JP' | 'jv-ID' | 'ka-GE' | 'kk-KZ' | 'km' | 'kl' | 'km-KH' | 'kab' | 'kn' | 'kn-IN' | 'ko' | 'ko-KR' | 'ku-TR' | 'kw' | 'la' | 'la-VA' | 'lb' | 'li-NL' | 'lt' | 'lt-LT' | 'lv' | 'lv-LV' | 'mai' | 'mg-MG' | 'mk' | 'mk-MK' | 'ml' | 'ml-IN' | 'mn-MN' | 'mr' | 'mr-IN' | 'ms' | 'ms-MY' | 'mt' | 'mt-MT' | 'my' | 'no' | 'nb' | 'nb-NO' | 'ne' | 'ne-NP' | 'nl' | 'nl-BE' | 'nl-NL' | 'nn-NO' | 'oc' | 'or-IN' | 'pa' | 'pa-IN' | 'pl' | 'pl-PL' | 'ps-AF' | 'pt' | 'pt-BR' | 'pt-PT' | 'qu-PE' | 'rm-CH' | 'ro' | 'ro-RO' | 'ru' | 'ru-RU' | 'sa-IN' | 'se-NO' | 'sh' | 'si-LK' | 'sk' | 'sk-SK' | 'sl' | 'sl-SI' | 'so-SO' | 'sq' | 'sq-AL' | 'sr' | 'sr-RS' | 'su' | 'sv' | 'sv-SE' | 'sw' | 'sw-KE' | 'ta' | 'ta-IN' | 'te' | 'te-IN' | 'tg' | 'tg-TJ' | 'th' | 'th-TH' | 'fil' | 'tlh' | 'tr' | 'tr-TR' | 'tt-RU' | 'uk' | 'uk-UA' | 'ur' | 'ur-PK' | 'uz' | 'uz-UZ' | 'vi' | 'vi-VN' | 'xh-ZA' | 'yi' | 'yi-DE' | 'zh' | 'zh-Hans' | 'zh-Hant' | 'zh-CN' | 'zh-HK' | 'zh-SG' | 'zh-TW' | 'zu-ZA';
                    avatarId?: string | null;
                    avatarDecorations?: ({
                        id: string;
                        angle?: number | null;
                        flipH?: boolean | null;
                        offsetX?: number | null;
                        offsetY?: number | null;
                    })[];
                    bannerId?: string | null;
                    fields?: {
                        name: string;
                        value: string;
                    }[];
                    isLocked?: boolean;
                    isExplorable?: boolean;
                    publicReactions?: boolean;
                    carefulBot?: boolean;
                    autoAcceptFollowed?: boolean;
                    noCrawle?: boolean;
                    preventAiLearning?: boolean;
                    isBot?: boolean;
                    receiveAnnouncementEmail?: boolean;
                    alwaysMarkNsfw?: boolean;
                    autoSensitive?: boolean;
                    followingVisibility?: 'public' | 'followers' | 'private';
                    followersVisibility?: 'public' | 'followers' | 'private';
                    mutedWords?: (string[] | string)[];
                    hardMutedWords?: (string[] | string)[];
                    mutedInstances?: string[];
                    notificationRecieveConfig?: {
                        note?: OneOf<[
                            {
                                type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                            },
                            {
                                type: 'list';
                                userListId: string;
                            }
                        ]>;
                        follow?: OneOf<[
                            {
                                type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                            },
                            {
                                type: 'list';
                                userListId: string;
                            }
                        ]>;
                        mention?: OneOf<[
                            {
                                type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                            },
                            {
                                type: 'list';
                                userListId: string;
                            }
                        ]>;
                        reply?: OneOf<[
                            {
                                type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                            },
                            {
                                type: 'list';
                                userListId: string;
                            }
                        ]>;
                        renote?: OneOf<[
                            {
                                type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                            },
                            {
                                type: 'list';
                                userListId: string;
                            }
                        ]>;
                        quote?: OneOf<[
                            {
                                type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                            },
                            {
                                type: 'list';
                                userListId: string;
                            }
                        ]>;
                        reaction?: OneOf<[
                            {
                                type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                            },
                            {
                                type: 'list';
                                userListId: string;
                            }
                        ]>;
                        pollEnded?: OneOf<[
                            {
                                type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                            },
                            {
                                type: 'list';
                                userListId: string;
                            }
                        ]>;
                        receiveFollowRequest?: OneOf<[
                            {
                                type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                            },
                            {
                                type: 'list';
                                userListId: string;
                            }
                        ]>;
                        followRequestAccepted?: OneOf<[
                            {
                                type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                            },
                            {
                                type: 'list';
                                userListId: string;
                            }
                        ]>;
                        roleAssigned?: OneOf<[
                            {
                                type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                            },
                            {
                                type: 'list';
                                userListId: string;
                            }
                        ]>;
                        app?: OneOf<[
                            {
                                type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                            },
                            {
                                type: 'list';
                                userListId: string;
                            }
                        ]>;
                        test?: OneOf<[
                            {
                                type: 'all' | 'following' | 'follower' | 'mutualFollow' | 'followingOrFollower' | 'never';
                            },
                            {
                                type: 'list';
                                userListId: string;
                            }
                        ]>;
                    };
                    emailNotificationTypes?: string[];
                    alsoKnownAs?: string[];
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['MeDetailed'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    i___move: {
        requestBody: {
            content: {
                'application/json': {
                    moveToAccount: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': Record<string, never>;
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    i___webhooks___create: {
        requestBody: {
            content: {
                'application/json': {
                    name: string;
                    url: string;
                    secret?: string;
                    on: ('mention' | 'unfollow' | 'follow' | 'followed' | 'note' | 'reply' | 'renote' | 'reaction')[];
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        id: string;
                        userId: string;
                        name: string;
                        on: ('mention' | 'unfollow' | 'follow' | 'followed' | 'note' | 'reply' | 'renote' | 'reaction')[];
                        url: string;
                        secret: string;
                        active: boolean;
                        latestSentAt: string | null;
                        latestStatus: number | null;
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    i___webhooks___list: {
        responses: {
            200: {
                content: {
                    'application/json': ({
                        id: string;
                        userId: string;
                        name: string;
                        on: ('mention' | 'unfollow' | 'follow' | 'followed' | 'note' | 'reply' | 'renote' | 'reaction')[];
                        url: string;
                        secret: string;
                        active: boolean;
                        latestSentAt: string | null;
                        latestStatus: number | null;
                    })[];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    i___webhooks___show: {
        requestBody: {
            content: {
                'application/json': {
                    webhookId: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        id: string;
                        userId: string;
                        name: string;
                        on: ('mention' | 'unfollow' | 'follow' | 'followed' | 'note' | 'reply' | 'renote' | 'reaction')[];
                        url: string;
                        secret: string;
                        active: boolean;
                        latestSentAt: string | null;
                        latestStatus: number | null;
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    i___webhooks___update: {
        requestBody: {
            content: {
                'application/json': {
                    webhookId: string;
                    name?: string;
                    url?: string;
                    secret?: string | null;
                    on?: ('mention' | 'unfollow' | 'follow' | 'followed' | 'note' | 'reply' | 'renote' | 'reaction')[];
                    active?: boolean;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    i___webhooks___delete: {
        requestBody: {
            content: {
                'application/json': {
                    webhookId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    invite___create: {
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['InviteCode'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    invite___delete: {
        requestBody: {
            content: {
                'application/json': {
                    inviteId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    invite___list: {
        requestBody: {
            content: {
                'application/json': {
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['InviteCode'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    invite___limit: {
        responses: {
            200: {
                content: {
                    'application/json': {
                        remaining: number | null;
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    meta: {
        requestBody: {
            content: {
                'application/json': {
                    detail?: boolean;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['MetaLite'] | components['schemas']['MetaDetailed'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    emojis: {
        responses: {
            200: {
                content: {
                    'application/json': {
                        emojis: components['schemas']['EmojiSimple'][];
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    emoji: {
        requestBody: {
            content: {
                'application/json': {
                    name: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['EmojiDetailed'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'miauth___gen-token': {
        requestBody: {
            content: {
                'application/json': {
                    session: string | null;
                    name?: string | null;
                    description?: string | null;
                    iconUrl?: string | null;
                    permission: string[];
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        token: string;
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    mute___create: {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                    expiresAt?: number | null;
                    excludeNotification?: boolean;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    mute___delete: {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    mute___list: {
        requestBody: {
            content: {
                'application/json': {
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Muting'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'renote-mute___create': {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'renote-mute___delete': {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'renote-mute___list': {
        requestBody: {
            content: {
                'application/json': {
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['RenoteMuting'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    my___apps: {
        requestBody: {
            content: {
                'application/json': {
                    limit?: number;
                    offset?: number;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['App'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    notes: {
        requestBody: {
            content: {
                'application/json': {
                    local?: boolean;
                    reply?: boolean;
                    renote?: boolean;
                    withFiles?: boolean;
                    poll?: boolean;
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Note'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    notes___children: {
        requestBody: {
            content: {
                'application/json': {
                    noteId: string;
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Note'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    notes___clips: {
        requestBody: {
            content: {
                'application/json': {
                    noteId: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Clip'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    notes___conversation: {
        requestBody: {
            content: {
                'application/json': {
                    noteId: string;
                    limit?: number;
                    offset?: number;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Note'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    notes___create: {
        requestBody: {
            content: {
                'application/json': {
                    visibility?: 'public' | 'home' | 'followers' | 'specified';
                    visibleUserIds?: string[];
                    cw?: string | null;
                    localOnly?: boolean;
                    reactionAcceptance?: null | 'likeOnly' | 'likeOnlyForRemote' | 'nonSensitiveOnly' | 'nonSensitiveOnlyForLocalLikeOnlyForRemote';
                    noExtractMentions?: boolean;
                    noExtractHashtags?: boolean;
                    noExtractEmojis?: boolean;
                    replyId?: string | null;
                    renoteId?: string | null;
                    channelId?: string | null;
                    text?: string | null;
                    fileIds?: string[];
                    mediaIds?: string[];
                    poll?: ({
                        choices: string[];
                        multiple?: boolean;
                        expiresAt?: number | null;
                        expiredAfter?: number | null;
                    }) | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        createdNote: components['schemas']['Note'];
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    notes___delete: {
        requestBody: {
            content: {
                'application/json': {
                    noteId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'notes___global-timeline': {
        requestBody: {
            content: {
                'application/json': {
                    withFiles?: boolean;
                    withRenotes?: boolean;
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                    sinceDate?: number;
                    untilDate?: number;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Note'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'notes___hybrid-timeline': {
        requestBody: {
            content: {
                'application/json': {
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                    sinceDate?: number;
                    untilDate?: number;
                    allowPartial?: boolean;
                    includeMyRenotes?: boolean;
                    includeRenotedMyNotes?: boolean;
                    includeLocalRenotes?: boolean;
                    withFiles?: boolean;
                    withRenotes?: boolean;
                    withReplies?: boolean;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Note'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'notes___local-timeline': {
        requestBody: {
            content: {
                'application/json': {
                    withFiles?: boolean;
                    withRenotes?: boolean;
                    withReplies?: boolean;
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                    allowPartial?: boolean;
                    sinceDate?: number;
                    untilDate?: number;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Note'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    notes___mentions: {
        requestBody: {
            content: {
                'application/json': {
                    following?: boolean;
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                    visibility?: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Note'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    notes___polls___vote: {
        requestBody: {
            content: {
                'application/json': {
                    noteId: string;
                    choice: number;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    notes___reactions: {
        requestBody: {
            content: {
                'application/json': {
                    noteId: string;
                    type?: string | null;
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['NoteReaction'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    notes___reactions___create: {
        requestBody: {
            content: {
                'application/json': {
                    noteId: string;
                    reaction: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    notes___reactions___delete: {
        requestBody: {
            content: {
                'application/json': {
                    noteId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    notes___renotes: {
        requestBody: {
            content: {
                'application/json': {
                    noteId: string;
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Note'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    notes___replies: {
        requestBody: {
            content: {
                'application/json': {
                    noteId: string;
                    sinceId?: string;
                    untilId?: string;
                    limit?: number;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Note'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'notes___search-by-tag': {
        requestBody: {
            content: {
                'application/json': {
                    reply?: boolean | null;
                    renote?: boolean | null;
                    withFiles?: boolean;
                    poll?: boolean | null;
                    sinceId?: string;
                    untilId?: string;
                    limit?: number;
                    tag?: string;
                    query?: string[][];
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Note'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    notes___search: {
        requestBody: {
            content: {
                'application/json': {
                    query: string;
                    sinceId?: string;
                    untilId?: string;
                    limit?: number;
                    offset?: number;
                    host?: string;
                    userId?: string | null;
                    channelId?: string | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Note'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    notes___show: {
        requestBody: {
            content: {
                'application/json': {
                    noteId: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Note'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    notes___state: {
        requestBody: {
            content: {
                'application/json': {
                    noteId: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        isMutedThread: boolean;
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'notes___thread-muting___create': {
        requestBody: {
            content: {
                'application/json': {
                    noteId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'notes___thread-muting___delete': {
        requestBody: {
            content: {
                'application/json': {
                    noteId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    notes___timeline: {
        requestBody: {
            content: {
                'application/json': {
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                    sinceDate?: number;
                    untilDate?: number;
                    allowPartial?: boolean;
                    includeMyRenotes?: boolean;
                    includeRenotedMyNotes?: boolean;
                    includeLocalRenotes?: boolean;
                    withFiles?: boolean;
                    withRenotes?: boolean;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Note'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    notes___translate: {
        requestBody: {
            content: {
                'application/json': {
                    noteId: string;
                    targetLang: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        sourceLang: string;
                        text: string;
                    };
                };
            };
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    notes___unrenote: {
        requestBody: {
            content: {
                'application/json': {
                    noteId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'notes___user-list-timeline': {
        requestBody: {
            content: {
                'application/json': {
                    listId: string;
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                    sinceDate?: number;
                    untilDate?: number;
                    allowPartial?: boolean;
                    includeMyRenotes?: boolean;
                    includeRenotedMyNotes?: boolean;
                    includeLocalRenotes?: boolean;
                    withRenotes?: boolean;
                    withFiles?: boolean;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Note'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    notifications___create: {
        requestBody: {
            content: {
                'application/json': {
                    body: string;
                    header?: string | null;
                    icon?: string | null;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    notifications___flush: {
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'notifications___mark-all-as-read': {
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'notifications___test-notification': {
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    flash___create: {
        requestBody: {
            content: {
                'application/json': {
                    title: string;
                    summary: string;
                    script: string;
                    permissions: string[];
                    visibility?: 'public' | 'private';
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Flash'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    flash___delete: {
        requestBody: {
            content: {
                'application/json': {
                    flashId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    flash___like: {
        requestBody: {
            content: {
                'application/json': {
                    flashId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    flash___show: {
        requestBody: {
            content: {
                'application/json': {
                    flashId: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Flash'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    flash___unlike: {
        requestBody: {
            content: {
                'application/json': {
                    flashId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    flash___update: {
        requestBody: {
            content: {
                'application/json': {
                    flashId: string;
                    title?: string;
                    summary?: string;
                    script?: string;
                    permissions?: string[];
                    visibility?: 'public' | 'private';
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    flash___my: {
        requestBody: {
            content: {
                'application/json': {
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Flash'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'flash___my-likes': {
        requestBody: {
            content: {
                'application/json': {
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        id: string;
                        flash: components['schemas']['Flash'];
                    }[];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    ping: {
        responses: {
            200: {
                content: {
                    'application/json': {
                        pong: number;
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'pinned-users': {
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['UserDetailed'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    roles___list: {
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Role'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    roles___show: {
        requestBody: {
            content: {
                'application/json': {
                    roleId: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Role'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    roles___users: {
        requestBody: {
            content: {
                'application/json': {
                    roleId: string;
                    sinceId?: string;
                    untilId?: string;
                    limit?: number;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        id: string;
                        user: components['schemas']['UserDetailed'];
                    }[];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'request-reset-password': {
        requestBody: {
            content: {
                'application/json': {
                    username: string;
                    email: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'reset-db': {
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'reset-password': {
        requestBody: {
            content: {
                'application/json': {
                    token: string;
                    password: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'server-info': {
        responses: {
            200: {
                content: {
                    'application/json': {
                        mem: {
                            total: number;
                        };
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    stats: {
        responses: {
            200: {
                content: {
                    'application/json': {
                        notesCount: number;
                        originalNotesCount: number;
                        usersCount: number;
                        originalUsersCount: number;
                        instances: number;
                        driveUsageLocal: number;
                        driveUsageRemote: number;
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    test: {
        requestBody: {
            content: {
                'application/json': {
                    required: boolean;
                    string?: string;
                    default?: string;
                    nullableDefault?: string | null;
                    id?: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        id?: string;
                        required: boolean;
                        string?: string;
                        default?: string;
                        nullableDefault?: string | null;
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    username___available: {
        requestBody: {
            content: {
                'application/json': {
                    username: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        available: boolean;
                    };
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    users___clips: {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Clip'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    users___followers: {
        requestBody: {
            content: {
                'application/json': {
                    sinceId?: string;
                    untilId?: string;
                    limit?: number;
                    userId?: string;
                    username?: string;
                    host?: string | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Following'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    users___following: {
        requestBody: {
            content: {
                'application/json': {
                    sinceId?: string;
                    untilId?: string;
                    limit?: number;
                    userId?: string;
                    username?: string;
                    host?: string | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Following'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'users___get-frequently-replied-users': {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                    limit?: number;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        user: components['schemas']['UserDetailed'];
                        weight: number;
                    }[];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    users___lists___create: {
        requestBody: {
            content: {
                'application/json': {
                    name: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['UserList'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    users___lists___delete: {
        requestBody: {
            content: {
                'application/json': {
                    listId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    users___lists___list: {
        requestBody: {
            content: {
                'application/json': {
                    userId?: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['UserList'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    users___lists___pull: {
        requestBody: {
            content: {
                'application/json': {
                    listId: string;
                    userId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    users___lists___push: {
        requestBody: {
            content: {
                'application/json': {
                    listId: string;
                    userId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            429: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    users___lists___show: {
        requestBody: {
            content: {
                'application/json': {
                    listId: string;
                    forPublic?: boolean;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['UserList'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    users___lists___favorite: {
        requestBody: {
            content: {
                'application/json': {
                    listId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    users___lists___unfavorite: {
        requestBody: {
            content: {
                'application/json': {
                    listId: string;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    users___lists___update: {
        requestBody: {
            content: {
                'application/json': {
                    listId: string;
                    name?: string;
                    isPublic?: boolean;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['UserList'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'users___lists___create-from-public': {
        requestBody: {
            content: {
                'application/json': {
                    name: string;
                    listId: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['UserList'];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'users___lists___update-membership': {
        requestBody: {
            content: {
                'application/json': {
                    listId: string;
                    userId: string;
                    withReplies?: boolean;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'users___lists___get-memberships': {
        requestBody: {
            content: {
                'application/json': {
                    listId: string;
                    forPublic?: boolean;
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': {
                        id: string;
                        createdAt: string;
                        userId: string;
                        user: components['schemas']['UserLite'];
                        withReplies: boolean;
                    }[];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    users___notes: {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                    withReplies?: boolean;
                    withRenotes?: boolean;
                    withChannelNotes?: boolean;
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                    sinceDate?: number;
                    untilDate?: number;
                    allowPartial?: boolean;
                    withFiles?: boolean;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Note'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    users___flashs: {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['Flash'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    users___reactions: {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                    limit?: number;
                    sinceId?: string;
                    untilId?: string;
                    sinceDate?: number;
                    untilDate?: number;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['NoteReaction'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    users___relation: {
        requestBody: {
            content: {
                'application/json': {
                    userId: string | string[];
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': OneOf<[
                        {
                            id: string;
                            isFollowing: boolean;
                            hasPendingFollowRequestFromYou: boolean;
                            hasPendingFollowRequestToYou: boolean;
                            isFollowed: boolean;
                            isBlocking: boolean;
                            isBlocked: boolean;
                            isMuted: boolean;
                            isRenoteMuted: boolean;
                        },
                        {
                            id: string;
                            isFollowing: boolean;
                            hasPendingFollowRequestFromYou: boolean;
                            hasPendingFollowRequestToYou: boolean;
                            isFollowed: boolean;
                            isBlocking: boolean;
                            isBlocked: boolean;
                            isMuted: boolean;
                            isRenoteMuted: boolean;
                        }[]
                    ]>;
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'users___search-by-username-and-host': {
        requestBody: {
            content: {
                'application/json': {
                    limit?: number;
                    detail?: boolean;
                    username?: string | null;
                    host?: string | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['User'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    users___search: {
        requestBody: {
            content: {
                'application/json': {
                    query: string;
                    offset?: number;
                    limit?: number;
                    origin?: 'local' | 'remote' | 'combined';
                    detail?: boolean;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['User'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    users___show: {
        requestBody: {
            content: {
                'application/json': {
                    userId?: string;
                    userIds?: string[];
                    username?: string;
                    host?: string | null;
                };
            };
        };
        responses: {
            200: {
                content: {
                    'application/json': components['schemas']['UserDetailed'] | components['schemas']['UserDetailed'][];
                };
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
    'users___update-memo': {
        requestBody: {
            content: {
                'application/json': {
                    userId: string;
                    memo: string | null;
                };
            };
        };
        responses: {
            204: {
                content: never;
            };
            400: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            401: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            403: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            418: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
            500: {
                content: {
                    'application/json': components['schemas']['Error'];
                };
            };
        };
    };
};
export {};
//# sourceMappingURL=types.d.ts.map