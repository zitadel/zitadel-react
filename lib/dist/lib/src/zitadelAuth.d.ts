import { UserManager } from "oidc-client-ts";
export interface ZitadelConfig {
    client_id: string;
    issuer: string;
    project_resource_id?: string;
}
interface ZitadelAuth {
    authorize(): Promise<void>;
    clearAuth(): Promise<void>;
    userManager: UserManager;
}
export declare function createZITADELAuth(zitadelConfig: ZitadelConfig): ZitadelAuth;
export {};
