// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import HomePage from './Home';
import GenerateArticle from './GenerateArticle';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article" element={<GenerateArticle />} />
      </Routes>
    </Router>
  );
  
}

export default App;
