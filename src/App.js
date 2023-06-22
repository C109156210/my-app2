import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Homepage';
import AboutPage from './Aboutpage';
import ArticlesPage from './Articlespage';
import ArticlePage from './Articlepage';
import Navbar from './Navbar'; 

import './Navbar.css';
  // import './App.css'; // 引入 App.css

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
       
      </Routes>
    </Router>
  );
};

export default App;