import {
  UserManagerSettings,
  UserManager,
  WebStorageStateStore,
} from "oidc-client-ts";

export interface ZitadelConfig {
  client_id: string;
  issuer: string;
  redirect_uri?: string;
  post_logout_redirect_uri?: string;
  scope?: string;
  project_resource_id?: string;
  prompt?: string;
}

interface ZitadelAuth {
  authorize(): Promise<void>;
  signout(): Promise<void>;
  userManager: UserManager;
}

export function createZitadelAuth(zitadelConfig: ZitadelConfig): ZitadelAuth {
  const authConfig: UserManagerSettings = {
    authority: `${zitadelConfig.issuer}`,
    client_id: `${zitadelConfig.client_id}`,
    redirect_uri: `${
      zitadelConfig.redirect_uri ?? "http://localhost:3000/callback"
    }`,
    response_type: "code",
    scope:
      zitadelConfig.scope ??
      `openid profile email ${
        zitadelConfig.project_resource_id
          ? `urn:zitadel:iam:org:project:id:${zitadelConfig.project_resource_id}:aud urn:zitadel:iam:org:projects:roles`
          : ""
      }`,
    prompt: zitadelConfig.prompt ?? "",
    post_logout_redirect_uri: `${
      zitadelConfig.post_logout_redirect_uri ?? "http://localhost:3000/"
    }`,
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
