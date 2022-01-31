import React from 'react';
import { Link } from "react-router-dom";

import Navbar from './navbar/Navbar';
import NavItem from './navbar/NavItem';
import NavLink from './navbar/NavLink';
import SettingsDropDown from './SettingsDropDown';
import Avatar from './Avatar.js';

import '../css/Navbar.css';

function Header() {
  const user = 'Haia';
  return (
    /*making the header, we need to divide the header into three parts 
          each part will have items inside of it such as tabs, logo and so on
        */
    <Navbar>
      <div className="navbar-group--left">
        <img src="/images/logo.PNG" alt="Mashup Logo"></img>
        <div className="search-bar--input">
          <input placeholder="Search mashup" type="text"></input>
        </div>
      </div>

      {/*Here I'm declaring the buttons which will take us to other pages*/}
      <div className="navbar-group--middle">
        <NavLink to="/">Home</NavLink>
        <NavLink to="MarketPlace">Market Place</NavLink>
        <NavLink to="DoodleCollab">Doodle Collab</NavLink>
        <NavLink to="Library">Library</NavLink>
      </div>

      {/*For the profile picture/username...still need to find out to have a picture*/}
      <div className="navbar-group--right">
        
        {/* {user ? (
          <Avatar userID={0}/>) :
          (<>
            <Link to="Login" className="header__item">
              Login
            </Link>
            <Link to="Signup" className="header__item">
              Sign up
            </Link>
          </>)} */}

        <NavItem icon="👤" />
        <NavItem icon="💬" />
        <NavItem icon="⚙️">
          <SettingsDropDown />
        </NavItem>
      </div>
    </Navbar>
  );
}

export default Header;
