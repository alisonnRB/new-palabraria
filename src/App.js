import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './output/index.css';

import HomePage from "./page/homepage/index";
import Login from "./page/login";
import CadastrarUser from "./page/cadastrarUser";
import Usuarios from "./page/usuarios";

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path='/*' element={ <HomePage/> } />
            <Route exact path='/Login' element={ <Login/> } />
            <Route path="/User" element={<Usuarios />}></Route>
            <Route exact path='/cadastro-user' element={ <CadastrarUser/> } />
        </Routes>
    </Router>
  );
}

export default App;
