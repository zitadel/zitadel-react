import { useEffect, useState } from "react";
import "./App.css";
import { createZitadelAuth, ZitadelConfig } from "@zitadel/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"

import Login from "./components/Login";
import Callback from "./components/Callback";
import JWTContainer from "./components/JWTContainer";

function App() {

  const config: ZitadelConfig = {
    authority: "https://CUSTOM_DOMAIN",
    client_id: "YOUR_CLIENT_ID",
    redirect_uri: "http://localhost:3000/callback",
    post_logout_redirect_uri: "http://localhost:3000",
    response_type: 'code',
    scope: 'openid profile email'
  };

  const zitadel = createZitadelAuth(config);

  function login() {
    zitadel.authorize();
  }

  function logout() {
    zitadel.signout();
  }

  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [idToken, setIdToken] = useState<string | null>(null);

  useEffect(() => {
    zitadel.userManager.getUser().then((user) => {
      if (user) {
        setAuthenticated(true);
        setAccessToken(user.access_token ?? null);
        setIdToken(user.id_token ?? null);
      } else {
        setAuthenticated(false);
        setAccessToken(null);
        setIdToken(null);
      }
    });
  }, [zitadel]);

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar />
          <Login authenticated={authenticated} handleLogin={login} handleLogout={logout} />
          <JWTContainer accessToken={accessToken} idToken={idToken} />
          <Routes>
            <Route
              path="/callback"
              element={<Callback setAuth={setAuthenticated} userManager={zitadel.userManager} />}
            />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
