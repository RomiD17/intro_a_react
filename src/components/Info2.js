import React, { Component } from 'react';

const api = (id) => `https://swapi.dev/api/people/${id}/ `;

class Info extends Component {
    constructor(){
        super();
        this.state = {
            personaje: ''
        }

		}
		apiCall(url, consecuencia){
			fetch(url)
				.then( response => response.json())
				.then( data =>  consecuencia(data))
				.catch( error => console.log(error))
		}
	
		componentDidMount(){
			console.log('se cargo el componente')
			this.apiCall( api(this.props.id), this.cambiarPersonaje)
		}
		componentDidUpdate(prevState){
		
				console.log('Cambio')
		}
		
		cambiarPersonaje = (data)=> {
			console.log(data)
			this.setState(
				{
					personaje: data,
				}
			)
		}
    render() { 
        return ( 
					<div>
        <h2>{this.state.personaje.name}</h2>

      </div> 
				 );
    }
}
 
export default Info;