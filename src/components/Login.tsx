import { Navigate } from "react-router-dom";

type Props = {
  handleLogin: () => void;
  authenticated: boolean | null;
};
const Login = ({ authenticated, handleLogin }: Props) => {
  return (
    <div>
      {authenticated === null && <div>Loading...</div>}
      {authenticated === false && (
        <div>
          <button
            onClick={() => {
              // Perform the authorization request, including the code challenge
              handleLogin();
            }}
          >
            Login
          </button>
        </div>
      )}
      {authenticated && <Navigate to="/callback" />}
    </div>
  );
};

export default Login;
