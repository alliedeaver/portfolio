import React from 'react';
import { Link } from "react-router-dom";
import backgroundPic from '../../assets/pic1.jpg'
const NavBar = () => {
      return (
      <header>
         <img className=' backgroundpic w-100 h-100 position-static'
            src={backgroundPic}>
          </img>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        
        <div className="container-fluid">
        <div className='offset-5'>
          <a className="navbar-brand" href="#">Alexandria Deaver</a>
          </div>
          <div className=''>
          <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/* <a className="nav-link active" aria-current="page" href="#">About Me</a> */}
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              <Link to="/about" className="nav-link active" aria-current="page">About</Link>
              <Link to="/portfolio" className="nav-link active" aria-current="page">Portfolio</Link>
              <Link to="/contact" className="nav-link active" aria-current="page">Contact</Link>
            </div>
          </div>
        </div>
        </div>
      </nav>
     </header>
      );
}
export default NavBar;
