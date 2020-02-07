import React from "react";
import './style.css'

class ColumnArticleRight extends React.Component {
    getClassNameColumnArticleWrapper = () => this.props.position === "right" ? "columnArticleRight" : "columnArticleLeft";

    getClassNameTextWrapper = () => this.props.position === "right" ? 'textWrapperReverse' : 'textWrapper';

    render() {
        return <div className={this.getClassNameColumnArticleWrapper()}>
            <div className='columnArticleRightPicture' />
            <div className={this.getClassNameTextWrapper()}>
                <div className='columnArticleRightHeader'>Article Header</div>
                <div className='columnArticleRightContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation</div>
            </div>
        </div>;
    }

}

export default ColumnArticleRight;