import React from "react";
import { NavLink } from 'react-router-dom'

import logo from 'src/templates/logo.png'

const Logo = () => (
    <div className="logo">
        <NavLink to="/">
            <img src={logo} alt={logo} />
        </NavLink>
        
    </div>
);

export default Logo;
