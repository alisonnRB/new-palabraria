import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './output/index.css';

import HomePage from "./page/homepage/index";
import Login from "./page/login";
import CadastrarUser from "./page/cadastrarUser";
import Usuarios from "./page/usuarios";
import CadastrarPalavra from "./page/cadastrar-palavra";
import ViewWord from './page/viewWord/index';
import Moder from './page/moderacao/index';
import ViewWordModer from './page/moderacao/viewWordModer/index';
import Update from "./page/update";
import UserInfos from "./page/userInfos";

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
            <Route path='/Moder/palavra/Update' element={<Update />} />
            <Route path='/Moder/palavra' element={<ViewWordModer />}/>
            <Route path='/Moder' element={<Moder />}/>
            <Route path='/User/infos' element={<UserInfos />} />
        </Routes>
    </Router>
  );
}

export default App;
