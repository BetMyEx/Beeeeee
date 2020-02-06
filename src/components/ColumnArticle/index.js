import React from "react";
import './style.css'
import ColumnArticleRight from "./Components/ColumnArticleRight";

class ColumnArticle extends React.Component {
    render() {
        return <div className="columnArticle">
            <ColumnArticleRight></ColumnArticleRight>
        </div>;
    }

}

export default ColumnArticle;