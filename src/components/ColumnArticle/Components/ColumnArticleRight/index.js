import React from "react";
import './style.css'

class ColumnArticleRight extends React.Component {
    render() {
        return <div className="columnArticleRight">
            <div className='columnArticleRightPicture'></div>
            <div className='columnArticleRightHeader'>Article Header</div>
            <div className='columnArticleRightContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</div>
        </div>;
    }

}

export default ColumnArticleRight;