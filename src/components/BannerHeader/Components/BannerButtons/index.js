import React from "react";
import './style.css';
class BannerButtons extends React.Component {
    render() {
        return <div className="bannerButtons">
            <button className="whiteButton">white button</button>
            <button className="blackButton">black button</button>
        </div>;
    }
}

export default BannerButtons;