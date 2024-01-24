import { UserManager, WebStorageStateStore, } from "oidc-client-ts";
export function createZITADELAuth(zitadelConfig) {
    const authConfig = {
        authority: `${zitadelConfig.issuer}`, //Replace with your issuer URL
        client_id: `${zitadelConfig.client_id}`, //Replace with your client id
        redirect_uri: "http://localhost:3000/callback",
        response_type: "code",
        scope: `openid profile email ${zitadelConfig.project_resource_id
            ? `urn:zitadel:iam:org:project:id:${zitadelConfig.project_resource_id}:aud urn:zitadel:iam:org:projects:roles`
            : ""}`,
        post_logout_redirect_uri: "http://localhost:3000/",
        //   userinfo_endpoint:
        //     "https://instance-some_text.zitadel.cloud/oidc/v1/userinfo",
        response_mode: "query",
        //   code_challenge_method: "S256",
    };
    const userManager = new UserManager({
        userStore: new WebStorageStateStore({ store: window.localStorage }),
        ...authConfig,
    });
    const authorize = () => {
        return userManager.signinRedirect();
    };
    const clearAuth = () => {
        return userManager.signoutRedirect();
    };
    const oidc = {
        authorize,
        clearAuth,
        userManager,
    };
    return oidc;
}
