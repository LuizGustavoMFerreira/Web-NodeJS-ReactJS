import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      n1: ' ',
      n2: ' ',
      total: ' '
    }
  };

  txtNum(e) {
    this.setState({ 
      n1:e.target.value.replace(/\D/g, ''), 
    });
  }

  txtNum2(e) {
    this.setState({ 
      n2:e.target.value.replace(/\D/g, ''),
    });
  }

  result(e) {
    this.setState({
      total: parseInt(this.state.n1) * parseInt(this.state.n2)
    });
  }

  render () {
    return (
      <div className="container">
        <h1>Multiplicador de Números</h1>

        <div>
          <input type="text" value={this.state.n1} onChange={this.txtNum.bind(this)} placeholder="Digite aqui o primeiro número" />
          <input type="text" value={this.state.n2} onChange={this.txtNum2.bind(this)} placeholder="Digite aqui o segundo número" />
        </div>

        <div>
          <button onClick={this.result.bind(this)}>Calcular</button>
        </div>

        <div>
          <h3>Resultado: {this.state.total}</h3>
        </div>
      </div>
    );
  }
}



export default App;
