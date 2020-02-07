import React from "react";
import './style.css';
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import LinkedIn from "./LinkedIn";
import Twitter from "./Twitter";

class SocialIcons extends React.Component {
    render() {
        return <nav className='socialIcons'>
            <div><Facebook></Facebook></div>
            <div><Instagram></Instagram></div>
            <div><LinkedIn></LinkedIn></div>
            <div><Twitter></Twitter></div>
        </nav> ;
    }

}
export default SocialIcons;