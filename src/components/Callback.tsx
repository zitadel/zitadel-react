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
  useEffect(() => {
    if (authenticated === null || userInfo === null) {
      userManager()
        .then((user: any) => {
          if (user) {
            setAuth(true);
            const access_token = user.access_token;
            const userInfoEndpoint = `${issuer}oidc/v1/userinfo`;
            fetch(userInfoEndpoint, {
              headers: {
                Authorization: `Bearer ${access_token}`,
              },
            })
              .then((response) => response.json())
              .then((userInfo) => {
                setUserInfo(userInfo);
              });
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
        <h1>Welcome, {userInfo.name}!</h1>
        <p className="description">Your ZITADEL Profile Information</p>
        <h3>Name: {userInfo.name}</h3>
        <h3>Email: {userInfo.email}</h3>
        <h3>Email Verified: {userInfo.email_verified ? "Yes" : "No"}</h3>
        <h3>Locale: {userInfo.locale}</h3>

        <button onClick={handleLogout}>Log out</button>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Callback;
