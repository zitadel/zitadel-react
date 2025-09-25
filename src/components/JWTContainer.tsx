type Props = {
  accessToken: string | null;
  idToken: string | null;
};

const JWTContainer = ({ accessToken, idToken }: Props) => {
  return (
    <div className="row m-3">
      <div className="col-md-6">
        <div className="card mb-3 shadow-sm">
          <div className="card-header fw-bold d-flex justify-content-between align-items-center">
            Decoded Access Token
            {accessToken && (
              <i
                className="fas fa-copy text-primary copy-btn"
                data-target="access_token"
                style={{ cursor: "pointer" }}
                onClick={() => navigator.clipboard.writeText(accessToken)}
              ></i>
            )}
          </div>
          <div className="card-body">
            <pre id="access-token" className="jwt-box">{accessToken || "No token generated yet."}</pre>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card mb-3 shadow-sm">
          <div className="card-header fw-bold d-flex justify-content-between align-items-center">
            Decoded ID Token
            {idToken && (
              <i
                className="fas fa-copy text-primary copy-btn"
                data-target="id_token"
                style={{ cursor: "pointer" }}
                onClick={() => navigator.clipboard.writeText(idToken)}
              ></i>
            )}
          </div>
          <div className="card-body">
            <pre id="id-token" className="jwt-box">{idToken || "No token generated yet."}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JWTContainer;