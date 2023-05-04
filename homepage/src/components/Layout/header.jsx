import "bootstrap/dist/css/bootstrap.css";
import React from "react";
function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          멋사Shop
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default Header;
