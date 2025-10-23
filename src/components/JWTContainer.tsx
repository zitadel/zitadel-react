import { useState } from "react";

type Props = {
    accessToken: string | null;
    idToken: string | null;
    refreshToken?: string | null;
};

function decodeJWT(jwt: string) {
    const parts = jwt.split('.');
    if (parts.length !== 3) {
        console.log("Token is not in JWT format");
        return jwt;
    }
    const payloadBase64 = parts[1];
    const decodedPayload = atob(payloadBase64.replace(/_/g, '/').replace(/-/g, '+'));
    const payloadObj = JSON.parse(decodedPayload);
    return payloadObj;
}

const JWTContainer = ({ accessToken, idToken, refreshToken }: Props) => {
    const decodedAccessToken = accessToken ? JSON.stringify(decodeJWT(accessToken), null, 2) : null;
    const decodedIdToken = idToken ? JSON.stringify(decodeJWT(idToken), null, 2) : null;

    const [copyState, setCopyState] = useState<{ [key: string]: boolean }>({});

    const handleCopy = (target: "accessToken" | "idToken" | "refreshToken", text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopyState((prev) => ({ ...prev, [target]: true }));
            setTimeout(() => {
                setCopyState((prev) => ({ ...prev, [target]: false }));
            }, 1500);
        });
    };

    return (
        <div className="row m-3">
            <div className="col-md-6">
                <div className="card mb-3 shadow-sm">
                    <div className="card-header fw-bold d-flex justify-content-between align-items-center">
                        Access Token
                        {accessToken && (
                            <i
                                className={`fas fa-copy copy-btn ${copyState.accessToken ? "text-success" : "text-primary"}`}
                                style={{ cursor: "pointer" }}
                                onClick={() => handleCopy("accessToken", accessToken)}
                            ></i>
                        )}
                    </div>
                    <div className="card-body">
                        <pre id="access-token" className="jwt-box">{decodedAccessToken || "No token generated yet."}</pre>
                    </div>
                </div>

                {refreshToken && (
                    <div className="card mb-3 shadow-sm">
                        <div className="card-header fw-bold d-flex justify-content-between align-items-center">
                            Refresh Token
                            <i
                                className={`fas fa-copy copy-btn ${copyState.refreshToken ? "text-success" : "text-primary"}`}
                                style={{ cursor: "pointer" }}
                                onClick={() => handleCopy("refreshToken", refreshToken)}
                            ></i>
                        </div>
                        <div className="card-body">
                            <pre id="refresh-token" className="jwt-box">{refreshToken}</pre>
                        </div>
                    </div>
                )}
            </div>

            <div className="col-md-6">
                <div className="card mb-3 shadow-sm">
                    <div className="card-header fw-bold d-flex justify-content-between align-items-center">
                        ID Token
                        {idToken && (
                            <i
                                className={`fas fa-copy copy-btn ${copyState.idToken ? "text-success" : "text-primary"}`}
                                style={{ cursor: "pointer" }}
                                onClick={() => handleCopy("idToken", idToken)}
                            ></i>
                        )}
                    </div>
                    <div className="card-body">
                        <pre id="id-token" className="jwt-box">{decodedIdToken || "No token generated yet."}</pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JWTContainer;
