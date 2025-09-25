type Props = {
  handleLogin: () => void;
  handleLogout: () => void;
  authenticated: boolean | null;
};

const Login = ({ authenticated, handleLogin, handleLogout }: Props) => {
  const handleClick = authenticated ? handleLogout : handleLogin;
  const label = authenticated ? "Logout" : "Login";
  const btnClass = authenticated ? "btn btn-outline-secondary logout-btn" : "btn btn-primary login-btn";

  return (
    <div className="d-flex align-items-center mx-3 my-3" style={{ paddingLeft: "0.8rem" }}>
      <button className={btnClass} onClick={handleClick}>
        {label}
      </button>
    </div>
  );
};

export default Login;
