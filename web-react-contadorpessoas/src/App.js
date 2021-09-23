import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      contador: 0, 
    }
  };

  diminuir() {
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  aumentar() {
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  resetar() {
    this.setState({
      contador: this.state.contador * 0,
    });
  }

  render () {
    return (
      <div className="container">
        <h1>Contador de Pessoas</h1>

        <div className="caixa">
          <h1>{this.state.contador}</h1>
        </div>

        <div className="botoes">
          <button className="btn1" onClick={this.aumentar.bind(this)}> + </button>
          <button className="btn2" onClick={this.diminuir.bind(this)}> - </button>
          <button className="btn3" onClick={this.resetar.bind(this)}> Resetar </button>
        </div>
      </div>
    );
  }
}

export default App;