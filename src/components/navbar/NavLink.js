import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavLink = (props) => {
    return <li className="nav-item">
        <Link to={props.to} className="nav-link">
            {props.children}
        </Link>
    </li>;
};

export default NavLink;
