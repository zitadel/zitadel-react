import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar bg-body-tertiary shadow-sm position-relative">
      <div className="container-fluid">
      <a className="navbar-brand" href="https://zitadel.com/admin/dashboard" target="_blank">
        <img src="https://zitadel.com/docs/img/zitadel-logo-dark.svg" alt="Logo" height="40"
          className="d-inline-block align-text-top"/>
      </a>
      <div className="position-absolute top-50 start-50 translate-middle d-flex align-items-center">
        <img src="/logo192.png" alt="React Logo" className="me-2" style={{ height: "30px" }} />
        <span className="fs-5 fw-bold">Zitadel React Quickstart SPA</span>
      </div>
      <div className="d-flex align-items-center ms-auto">
        <a href="https://zitadel.com/docs" target="_blank" className="nav-link d-flex align-items-center me-3">
          <i className="fas fa-book me-1"></i> Docs
        </a>
        <a href="https://github.com/zitadel" target="_blank" className="nav-link d-flex align-items-center me-3">
          <i className="fab fa-github me-1"></i> GitHub
        </a>
        <a href="https://discord.com/invite/zitadel" target="_blank" className="nav-link d-flex align-items-center">
          <i className="fab fa-discord me-1"></i> Community
        </a>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;