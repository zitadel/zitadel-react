import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { createZitadelAuth, ZitadelConfig } from "@zitadel/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Callback from "./components/Callback";

function App() {
  const config: ZitadelConfig = {
    authority: "https://zitadel-login-zeta.vercel.app",
    client_id: "326833174820750579",
  };

  const zitadel = createZitadelAuth(config);

  function login() {
    zitadel.authorize();
  }

  function signout() {
    zitadel.signout();
  }

  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    zitadel.userManager.getUser().then((user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });
  }, [zitadel]);

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
                  authenticated={authenticated}
                  setAuth={setAuthenticated}
                  handleLogout={signout}
                  userManager={zitadel.userManager}
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
