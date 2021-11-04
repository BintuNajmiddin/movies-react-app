import React from "react"; 
import { Link } from "react-router-dom";

// import "../App.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container header-container">
        <Link className="header-logo-link" to='/'>
         <img className="header-logo" src="img/logo(3).svg" alt="logo" />
        </Link>
        
        <nav >
          <ul className="navbar-list">
            <li className="navbar-item"><Link to='/search'>Search</Link></li>
            <li className="navbar-item"><Link to='/catalog'>Movies</Link></li>
           </ul>
        </nav>
        <div>
        <Link to='/search'>
          <i className="fas fa-search"></i>
          </Link>  
        </div>
      </div>
    </div>
  );
};

export default Header;