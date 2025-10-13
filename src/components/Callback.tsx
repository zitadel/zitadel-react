import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserManager } from "oidc-client-ts";

type Props = {
  setAuth: (authenticated: boolean | null) => void;
  userManager: UserManager;
};

const Callback = ({ setAuth, userManager }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    async function handleCallback() {
      try {
        // Exchange the code for tokens
        const user = await userManager.signinRedirectCallback();

        if (user) {
          setAuth(true);
          // Redirect to home or wherever you want
          navigate("/", { replace: true });
        } else {
          setAuth(false);
          navigate("/", { replace: true });
        }
      } catch (error) {
        console.error("Callback error", error);
        setAuth(false);
        navigate("/", { replace: true });
      }
    }

    handleCallback();
  }, [userManager, setAuth, navigate]);

  return null;
};

export default Callback;