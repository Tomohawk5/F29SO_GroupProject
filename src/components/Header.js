import React from 'react'; 
import './Header.css';
import {NavLink} from 'react-router-dom'; 
import Settings from './Settings';

function Header() {
    return (
        /*making the header, we need to divide the header into three parts 
          each part will have items inside of it such as tabs, logo and so on
        */
        <ul className="header">
            <li className="header__left">
               <img src="/images/logo.PNG" alt=""></img>
                <div className="SearchBar__input" >
                    <input placeholder="Search mashup" type="text"></input>
                </div>
            </li>

            {/*Here I'm declaring the bottons which will take us to other pages*/} 
            <li className="header__middle">
                <a href="Home" className="Header__item">Home</a>
                <a href="MarketPlace" className="Header__item">Market Place</a>
                <a href="DoodleCollab" className="Header__item">Doodle Collab</a>
            </li>

            {/*For the profile picture/username...still need to find out to have a picture*/} 
            <li className="header__right">
                <div className="profile_image">
                    <h4>Magik</h4>
                </div>
                <a href="Login" className="Header__item">Login</a>
                <a href="Signup" className="Header__item">Sign up</a>
                <Settings />
            </li>
        </ul>
    )
}

export default Header