import React from "react";
import './style.css';

class FirstArticle extends React.Component{
    render() {
        return <div className="firstArticle">
            <div className="firstArticlePicture"></div>
            <div className='firstArticleHeader'>Article Header</div>
            <div className='firstArticleContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</div>
            <button className='firstArticleMore'>Read more</button>
        </div>;
    }

}
export default FirstArticle;