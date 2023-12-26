import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './output/index.css';

import HomePage from "./page/homepage/index";

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={ <HomePage/> } />
        </Routes>
    </Router>
  );
}

export default App;
