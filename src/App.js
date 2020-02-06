import React from 'react';
import './App.css';
import Header from "./components/Header";
import BannerHeader from "./components/BannerHeader";
import LineArticle from "./components/LineArticle";
import SignUp from "./components/SignUp";

function App() {
    return (
        <div>
          <Header/>
          <BannerHeader/>
          <LineArticle/>
          <SignUp/>
        </div>
    );
}

export default App;
