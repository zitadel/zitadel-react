# @zitadel/react Example

Authenticate your [ZITADEL](https://zitadel.com) users within your React applications.

> [!IMPORTANT]
> If you want to try out [@zitadel/react](https://www.npmjs.com/package/@zitadel/react), read the [ZITADEL step-by-step guide for React](https://zitadel.com/docs/examples/login/react).
> It shows how to get the _authority_ and _client_id_ from ZITADEL and how to wire everything up in React.

## Project Structure

This project is a default React application created with [Create React App](https://create-react-app.dev/) that contains the ZITADEL React SDK to handle OIDC. The library is located in `/lib` folder and published as `@zitadel/react`.

![NPM Version](https://img.shields.io/npm/v/@zitadel/react)
![NPM License](https://img.shields.io/npm/l/@zitadel/react)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

The following pages are added to the scaffolded example application:

- _src/components/Login.tsx_: The login page shows a button if no user is authenticated and redirects the user to /callback if authenticated.
- _src/components/Callback.tsx_: This page completes the auth flow and renders the retrieved information from the user info endpoint.

## Run

To run the example, navigate to the `/lib` folder and run `yarn build`.

```bash
cd /lib
yarn install
yarn build
```

then navigate back and install the dependencies of the example application

```bash
cd ..
yarn install
```

Next follow the guide for React applications in our [docs](https://zitadel.com/docs/examples/login/react)
and set `authority` as well as `client_id` in the `App.tsx` file.
Finally you can start the application with

```bash
yarn start
```

Your application will then run on `http://localhost:3000`.

## Available scripts

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
