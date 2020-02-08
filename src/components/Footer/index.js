import React from "react";
import './style.css';
import MenuItem from "../Header/Componets/MenuItem";
import Logo from "../Header/Componets/Logo";
import SocialIcons from "./Components/SocialIcons";
import Line from "./Components/FooterLine";
class Footer extends React.Component {
    render() {
        return <div className='footer'>
            <div className='footerContent'>
            <div className="footerLogo"><Logo position="footer"></Logo></div>
            <div className="footerMenu"><MenuItem position="footer"></MenuItem></div>
            <div className='footerLine'><Line></Line></div>
            <div className='footerSocialIcons'><SocialIcons></SocialIcons></div>
            </div>
        </div>;
    }
}
export default Footer;