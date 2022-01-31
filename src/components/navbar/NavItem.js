import React from 'react';
import { useState } from 'react';
import '../../css/Navbar.css'

const NavItem = (props) => {

    const [open, setOpen] = useState(false);

    return <li className="nav-item">
        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
            {props.icon}
        </a>

        {open && props.children}
    </li>;
};

export default NavItem;
