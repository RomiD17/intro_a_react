import React, { Component } from 'react';

const api = (id) => `https://swapi.dev/api/people/${id}/`

class Info extends Component {
	constructor(){
		super();
		this.state = {
			persona: '',
			birth_year: ''
		}
	}

	apiCall(url, consecuencia){
		fetch(url)
		.then( response => response.json())
		.then( data => consecuencia(data))
		.catch( error => console.log(error))
	}

	componentDidMount(){
		this.apiCall(api(this.props.id), this.personaje)
	}

	personaje = (data) =>{
		console.log(data)
		this.setState({
			persona: data.name,
			birth_year: data.birth_year,
		})
	}

	render() { 
		return ( 
			<div>
				<h1>Nombre: {this.state.persona}</h1>
				<h4>Fecha de nacimiento: {this.state.birth_year}</h4>
			</div>
		 );
	}
}
 
export default Info;