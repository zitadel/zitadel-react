type Props = {
  handleLogin: () => void;
  handleLogout: () => void;
  authenticated: boolean | null;
};
const Login = ({ authenticated, handleLogin, handleLogout }: Props) => {
  return (
    <div className="d-flex align-items-center mx-3 my-3" style={{ paddingLeft: "0.8rem" }}>
      {!authenticated && (
        <button className="btn btn-primary login-btn" onClick={handleLogin}>
          Login
        </button>
      )}

      {authenticated && (
        <button className="btn btn-outline-secondary logout-btn" onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Login;
