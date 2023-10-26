import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
      return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Alexandria Deaver</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/* <a className="nav-link active" aria-current="page" href="#">About Me</a> */}
              <Link to="/" className="nav-link active" aria-current="page">homePage</Link>
              <Link to="/about" className="nav-link active" aria-current="page">About</Link>
              <Link to="/portfolio" className="nav-link active" aria-current="page">Portfolio</Link>
              <Link to="/contact" className="nav-link active" aria-current="page">Contact</Link>
              <Link to="/resume" className="nav-link active" aria-current="page">Resume</Link>
            </div>
          </div>
        </div>
      </nav>
      );
}
export default Header;