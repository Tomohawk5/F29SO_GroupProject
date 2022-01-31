import React from 'react';
import '../css/Dropdown.css'
import '../css/Navbar.css'

import DarkMode from './DarkMode.js';

const SettingsDropDown = () => {

    let root = document.getElementById(':root');
    let dark = false;

    let theme = localStorage.getItem('data-theme');
    if (theme === 'dark') {
        toDarkTheme();
    }

    function toggleTheme() {
        // let theme = localStorage.getItem('data-theme');
        // if (theme === 'dark') {
        //     toLightTheme();
        // } else {
        //     toDarkTheme();
        // }
        if (dark) {
            toLightTheme();
            dark = false;
        } else {
            toDarkTheme();
            dark = true;
        }
    }

    function toLightTheme() {
        // document.documentElement.setAttribute("data-theme", "light");
        // localStorage.setItem("data-theme", 'light');
        // console.log("Changed to light theme");
        root.classList.replace('light', 'dark')
    }

    function toDarkTheme() {
        // document.documentElement.setAttribute("data-theme", "dark");
        // localStorage.setItem("data-theme", 'dark');
        // console.log("Changed to dark theme");
        root.classList.replace('dark', 'light')
    }

    function swapThemes() {
    }

    function DropdownItem(props) {
        return (
            <div className="menu-item">
                <span className="icon-button">{props.leftIcon}</span>

                {props.children}

                <span className="icon-right">{props.rightIcon}</span>
            </div>
        );
    }

    return <div className="dropdown">
        <DropdownItem>Option 1</DropdownItem>
        <DropdownItem>Option 2</DropdownItem>
        <DropdownItem>
            <p onClick={toggleTheme}>
                Theme
            </p>
        </DropdownItem>
        <DropdownItem>
            <DarkMode />
        </DropdownItem>
        <DropdownItem>Option 5</DropdownItem>
    </div>;
};

export default SettingsDropDown;
