/// <reference types="react" />
type Props = {
    authenticated: boolean;
    setAuth: (authenticated: boolean) => void;
    userManager: any;
    userInfo: any;
    setUserInfo: any;
    handleLogout: any;
};
declare const Callback: ({ authenticated, setAuth, userManager, userInfo, setUserInfo, handleLogout, }: Props) => import("react").JSX.Element;
export default Callback;
