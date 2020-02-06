import React from "react";
import "./style.css";
import FirstArticle from './Components/FirstArticle';
class LineArticle extends React.Component {
    render() {
        return <div className="lineArticle">
            <div><FirstArticle></FirstArticle></div>
            <div><FirstArticle></FirstArticle></div>
            <div><FirstArticle></FirstArticle></div>
        </div>
    }
}
export default LineArticle;