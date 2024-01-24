import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './output/index.css';

import HomePage from "./page/homepage/index";
import Login from "./page/login";
import CadastrarUser from "./page/cadastrarUser";

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path='/*' element={ <HomePage/> } />
            <Route exact path='/Login' element={ <Login/> } />
            <Route exact path='/cadastro-user' element={ <CadastrarUser/> } />
        </Routes>
    </Router>
  );
}

export default App;
