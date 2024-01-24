/// <reference types="react" />
type Props = {
    handleLogin: () => void;
    authenticated: boolean;
};
declare const Login: ({ authenticated, handleLogin }: Props) => import("react").JSX.Element;
export default Login;
