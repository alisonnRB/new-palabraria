import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './output/index.css';

import HomePage from "./page/homepage/index";
import Login from "./page/login";
import CadastrarUser from "./page/cadastrarUser";
import Usuarios from "./page/usuarios";
import CadastrarPalavra from "./page/cadastrar-palavra";
import ViewWord from './page/viewWord/index';

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path='/*' element={ <HomePage/> } />
            <Route exact path='/Login' element={ <Login/> } />
            <Route path="/User" element={<Usuarios />}></Route>
            <Route path='/cadastro-user' element={ <CadastrarUser/> } />
            <Route path='/cadastro-palavra' element={ <CadastrarPalavra /> } />
            <Route path='/Busca/palavra' element={<ViewWord />}/>
        </Routes>
    </Router>
  );
}

export default App;
