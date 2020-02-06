import React from "react";
import './style.css'
import MenuItem from "./Componets/MenuItem";

class Header extends React.Component {
    render() {
        return <div className="header">
            <div className="logo"></div>
            <div><MenuItem></MenuItem></div>
        </div>;
    }
}

export default Header