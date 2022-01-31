import React from 'react';
import './Dropdown.css'

const DropdownMenu = () => {

    function logTheme() {
        const theme = getComputedStyle(document.documentElement).getPropertyValue('--theme');
        console.log(theme);
    }

    function setColour(colour) {
        document.documentElement.style.setProperty('--background', colour);
    }

    function DropdownItem(props) {
        return (
            <div className="menu-item">
                <span className="icon-button">{props.leftIcon}</span>

                {props.children}

                <span className="icon-button">{props.rightIcon}</span>
            </div>
        );
    }
    return <div className="dropdown">
        <DropdownItem>Account</DropdownItem>
        <DropdownItem>Logout</DropdownItem>
        <DropdownItem leftIcon="🌑" onClick={logTheme()}>Theme</DropdownItem>
    </div>;
};

export default DropdownMenu;
