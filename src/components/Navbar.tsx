const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="https://zitadel.com/admin/dashboard"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://zitadel.com/docs/img/zitadel-logo-dark.svg"
            alt="Logo"
            height="40"
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="position-absolute start-50 translate-middle-x d-flex align-items-center">
            <img
              src="/logo192.png"
              alt="React Logo"
              className="me-2"
              style={{ height: "30px" }}
            />
            <span className="fs-5 fw-bold">Zitadel React Quickstart SPA</span>
          </div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                href="https://zitadel.com/docs"
                target="_blank"
                rel="noreferrer"
                className="nav-link d-flex align-items-center"
              >
                <i className="fas fa-book me-1"></i> Docs
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://github.com/zitadel"
                target="_blank"
                rel="noreferrer"
                className="nav-link d-flex align-items-center"
              >
                <i className="fab fa-github me-1"></i> GitHub
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://discord.com/invite/zitadel"
                target="_blank"
                rel="noreferrer"
                className="nav-link d-flex align-items-center"
              >
                <i className="fab fa-discord me-1"></i> Community
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;