import { UserManager, WebStorageStateStore, } from "oidc-client-ts";
export function createZitadelAuth(zitadelConfig) {
    var _a, _b, _c;
    const authConfig = {
        authority: `${zitadelConfig.issuer}`,
        client_id: `${zitadelConfig.client_id}`,
        redirect_uri: `${(_a = zitadelConfig.redirect_uri) !== null && _a !== void 0 ? _a : "http://localhost:3000/callback"}`,
        response_type: "code",
        scope: (_b = zitadelConfig.scope) !== null && _b !== void 0 ? _b : `openid profile email ${zitadelConfig.project_resource_id
            ? `urn:zitadel:iam:org:project:id:${zitadelConfig.project_resource_id}:aud urn:zitadel:iam:org:projects:roles`
            : ""}`,
        post_logout_redirect_uri: `${(_c = zitadelConfig.post_logout_redirect_uri) !== null && _c !== void 0 ? _c : "http://localhost:3000/"}`,
        response_mode: "query",
    };
    const userManager = new UserManager({
        userStore: new WebStorageStateStore({ store: window.localStorage }),
        ...authConfig,
    });
    const authorize = () => {
        return userManager.signinRedirect();
    };
    const signout = () => {
        return userManager.signoutRedirect();
    };
    const oidc = {
        authorize,
        signout,
        userManager,
    };
    return oidc;
}
