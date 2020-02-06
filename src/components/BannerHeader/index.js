import React from "react";
import "./style.css";
import BannerButtons from "./Components/BannerButtons";
class BannerHeader extends React.Component {
    render() {
        return <div className="bannerHeader">
            <div className="contentWrapper">
            <p className="bannerH1">Banner Header</p>
            <p className="bannerH2">Lorem ipsum dolor sit amet</p>
            </div>
            <div><BannerButtons></BannerButtons></div>;
        </div>;

    }
}
export default BannerHeader;


