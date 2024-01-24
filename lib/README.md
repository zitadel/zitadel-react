# ZITADEL React SDK

Authenticate your [ZITADEL](https://zitadel.com) users within your React applications.

![NPM Version](https://img.shields.io/npm/v/@zitadel/react)
![NPM License](https://img.shields.io/npm/l/@zitadel/react)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

## Getting Started

- Check out the docs on how to [integrate ZITADEL into your existing React application](https://zitadel.com/docs/examples/login/react).
- Create a new React application with ZITADEL integration from scratch by following the example at [ZITADEL React example application](https://github.com/zitadel/zitadel-react/blob/main/README.md).

## Features

The NPM package [@zitadel/react](https://www.npmjs.com/package/@zitadel/react) wraps the NPM package [oidc-client-ts](https://github.com/authts/oidc-client-ts).
All [oidc-client-ts](https://github.com/authts/oidc-client-ts) features are available and the whole configuration can be overridden.

The following features are added to [oidc-client-ts](https://github.com/authts/oidc-client-ts)

- [@zitadel/react](https://www.npmjs.com/package/@zitadel/react) defaults as much configuration as possible.
- [@zitadel/react](https://www.npmjs.com/package/@zitadel/react) provides a simple way to check for user roles.

The following is an example for a minimal OIDC configuration:

```typescript
const zitadelAuth = createZitadelAuth({
  issuer: `${myZITADELInstancesOrigin}`,
  client_id: `${myApplicationsClientID}`,
  project_resource_id: `${myApplicationsProjectResourceID}`,
});
```

The following defaults apply:

- The OIDC Code Flow with PKCE is used for authentication at ZITADEL.
- ZITADELs user info endpoint is called to enrich the user profile.
- The access token is refreshed automatically by default before it expires.
- If you specify a _project_resource_id_, the scopes for retrieving the users roles from the user info endpoint are added automatically.
  You can conveniently use `zitadelAuth.hasRole("someRoleKey")`.
