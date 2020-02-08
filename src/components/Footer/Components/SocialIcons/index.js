import React from "react";
import './style.css';
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import LinkedIn from "./LinkedIn";
import Twitter from "./Twitter";

class SocialIcons extends React.Component {
    render() {
        return <nav className='socialIcons'>
            <Facebook />
            <Instagram />
            <LinkedIn />
            <Twitter />
        </nav>;
    }

}

export default SocialIcons;