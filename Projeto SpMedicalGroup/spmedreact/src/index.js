import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from 'react-router-dom';

import './index.css';

import Login from './pages/login/login';

import Home from './pages/home/home';


import reportWebVitals from './reportWebVitals';
import funcionalidades from './pages/fun/funcionalidades';
import CadastrarConsultas from './pages/cadastro/cadastro';



  const routing = (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} /> {/* Login */}      
          <Route exact path="/" component= {Home} /> {/* Home */}      
          <Route path="/funcionalidades" component= {funcionalidades} /> {/* Home */}      
          <Route path="/cadastrar" component= {CadastrarConsultas} /> {/* Cadastro */}      
        </Switch>
      </div>
    </Router>
  );
  


ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();