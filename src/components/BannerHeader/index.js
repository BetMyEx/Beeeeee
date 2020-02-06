import React from "react";
import "./style.css"
class BannerHeader extends React.Component {
    render() {
        return <div className="bannerHeader">
            <div className="contentWrapper">
            <p className="bannerH1">Banner Header</p>
            <p className="bannerH2">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="bannerButtons">
            <button className="whiteButton">white button</button>
            <button className="blackButton">black button</button>
            </div>
        </div>;
    }
}

export default BannerHeader;


