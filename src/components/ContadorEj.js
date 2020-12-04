import React, { Component } from 'react';
const api = (id) => `https://swapi.dev/api/people/${id}/ `;

class Contador extends Component {
  constructor(){
    super();
    this.state = {
      valor: 1,
      personaje: ''
    } 
  }

  aumentar(){
    this.setState({
      valor: this.state.valor + 1,
    })
  }
  cambiarRojo(){
    document.querySelector('.btn').style.backgroundColor = "#FF0000"
  }
  cambiarVerde(){
    document.querySelector('.btn').style.backgroundColor = "green"
  }

  componentDidMount(){
    console.log('se cargo el componente')
  }
  componentDidUpdate(prevState){
      console.log('Cambio')
  }
    
  render() { 
      return (
      <div>
        <p>{this.state.valor}</p>
        <button 
        className = "btn"
        onClick = {() => this.aumentar()}
        onMouseOver = {this.cambiarRojo}
        onMouseOut = {this.cambiarVerde}
        >Sumar</button>

      </div> 
       );
  }
}
 
export default Contador;