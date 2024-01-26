import { useEffect } from "react";

type Props = {
  issuer: string;
  authenticated: boolean | null;
  setAuth: (authenticated: boolean | null) => void;
  userManager: any;
  userInfo: any;
  setUserInfo: any;
  handleLogout: any;
};

const Callback = ({
  issuer,
  authenticated,
  setAuth,
  userManager,
  userInfo,
  setUserInfo,
  handleLogout,
}: Props) => {
  function loadUserDiscovery(accessToken: string) {
    const userInfoEndpoint = `${issuer}oidc/v1/userinfo`;
    fetch(userInfoEndpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((userInfo) => {
        setUserInfo(userInfo);
      });
  }

  useEffect(() => {
    if (authenticated === null) {
      userManager
        .signinRedirectCallback()
        .then((user: any) => {
          if (user) {
            setAuth(true);
            loadUserDiscovery(user.access_token);
          } else {
            setAuth(false);
          }
        })
        .catch((error: any) => {
          setAuth(false);
        });
    }
    if (authenticated === true && userInfo === null) {
      userManager
        .getUser()
        .then((user: any) => {
          if (user) {
            setAuth(true);
            loadUserDiscovery(user.access_token);
          } else {
            setAuth(false);
          }
        })
        .catch((error: any) => {
          setAuth(false);
        });
    }
  }, [authenticated, userManager, setAuth]);
  if (authenticated === true && userInfo) {
    return (
      <div className="user">
        <h2>Welcome, {userInfo.name}!</h2>
        <p className="description">Your ZITADEL Profile Information</p>
        <p>Name: {userInfo.name}</p>
        <p>Email: {userInfo.email}</p>
        <p>Email Verified: {userInfo.email_verified ? "Yes" : "No"}</p>
        <p>
          Roles:{" "}
          {JSON.stringify(
            userInfo["urn:zitadel:iam:org:project:251288942656156695:roles"]
          )}
        </p>

        <button onClick={handleLogout}>Log out</button>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Callback;
