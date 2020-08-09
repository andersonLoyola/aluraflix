import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './index.css';
import Home from './Pages/Home';
import CadastroVideos from './Pages/Cadastro/Videos';
import CadastroCategorias from './Pages/Cadastro/Categorias';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/videos" component={CadastroVideos} />
      <Route path="/cadastro/categorias" component={CadastroCategorias} />
      <Route component={() => (
        <div>
          Página não encontrada erro 404
        </div>
      )}
      />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
