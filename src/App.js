import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './output/index.css';

import HomePage from "./page/homepage/index";
import Login from "./page/login";

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path='/*' element={ <HomePage/> } />
            <Route exact path='/Login' element={ <Login/> } />
        </Routes>
    </Router>
  );
}

export default App;
