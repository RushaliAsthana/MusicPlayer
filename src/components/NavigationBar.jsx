import React from "react";
import Logo from "./assets/images/logo.png";
import FaUser from "./assets/images/fa-user.png";
function NavigationBar()
{
      return <nav className="navbar navbar-expand-sm ">
      <a className="navbar-brand" href="#">
        <img height="40px" src={Logo} alt="logo" />
      </a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
        <a className="nav-link" >
           <input placeholder="Search Music" className="form-control form-control-sm"/>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
           <img height="40px" src={FaUser}/>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          <i className="fa fa-bars fa-2x theme-pink" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </nav>
}
export default NavigationBar;