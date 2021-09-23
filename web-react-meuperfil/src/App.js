import React, { Component } from 'react'; 

import './App.css';

class App extends Component{

  render() {
    return(
      <div className="container">
        <img src="/img/eu.png" alt="" className="minhaFoto"/>
        <form action="" className="dados">
          <h2>Dados Pessoais</h2>
          <span>Luiz Gustavo</span>
          <h2>Formação</h2>
          <span>Estudante da UNIP</span>
          <h2>Experiência</h2>
          <span>Full-Stack e Banco de Dados</span>
          <h2>Projetos</h2>
          <a href="https://github.com/LuizGustavoMFerreira">Se quiser saber mais clique aqui</a>
        </form>
      </div>
    );
  }
}


export default App;
