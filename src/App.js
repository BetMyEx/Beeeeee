import React from 'react';
import './App.css';
import Header from "./components/Header";
import BannerHeader from "./components/BannerHeader";
import LineArticle from "./components/LineArticle";
import SignUp from "./components/SignUp";
import ColumnArticle from "./components/ColumnArticle";

function App() {
    return (
        <div>
          <Header/>
          <BannerHeader/>
          <LineArticle/>
          <SignUp/>
          <ColumnArticle/>
        </div>
    );
}

export default App;
