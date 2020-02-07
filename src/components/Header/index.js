import React from "react";
import './style.css'
import MenuItem from "./Componets/MenuItem";
import Logo from "./Componets/Logo";

class Header extends React.Component {
    render() {
        return <div className="header">
            <div><Logo></Logo></div>
            <div><MenuItem></MenuItem></div>
        </div>;
    }
}

export default Header