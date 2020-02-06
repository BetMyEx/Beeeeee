import React from 'react';
import './App.css';
import Header from "./components/Header";
import BannerHeader from "./components/BannerHeader";

function App() {
    return (
        <div>
          <Header/>
          <BannerHeader/>
          <lineArticles/>
        </div>
    );
}

export default App;
