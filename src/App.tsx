import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { createZITADELAuth, ZitadelConfig } from "@zitadel/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Callback from "./components/Callback";

function App() {
  const config: ZitadelConfig = {
    issuer: "",
    client_id: "",
  };
  const oidc = createZITADELAuth(config);

  function login() {
    oidc.authorize();
  }

  function signout() {
    oidc.clearAuth();
  }

  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    oidc.userManager.getUser().then((user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });
  }, [oidc]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to ZITADEL React</p>

        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Login authenticated={authenticated} handleLogin={login} />
              }
            />
            <Route
              path="/callback"
              element={
                <Callback
                  issuer={config.issuer}
                  authenticated={authenticated}
                  setAuth={setAuthenticated}
                  userInfo={userInfo}
                  setUserInfo={setUserInfo}
                  handleLogout={signout}
                  userManager={oidc.userManager}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
