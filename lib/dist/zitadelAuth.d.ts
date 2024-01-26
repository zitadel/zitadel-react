import { UserManager } from "oidc-client-ts";
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
export declare function createZitadelAuth(zitadelConfig: ZitadelConfig): ZitadelAuth;
export {};
