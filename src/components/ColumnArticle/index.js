import React from "react";
import './Components/ColumnArticleRight/style.css'
import ColumnArticleRight from "./Components/ColumnArticleRight";

class ColumnArticle extends React.Component {
    render() {
        return <div className='columnArticle'>
            <ColumnArticleRight position="right" />
            <ColumnArticleRight position="left" />
            <ColumnArticleRight position="right" />
        </div>;
    }

}

export default ColumnArticle;