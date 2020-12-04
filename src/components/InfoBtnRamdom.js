import React, { Component } from 'react';
import {Button} from '@material-ui/core'; 

const api = (id) => `https://swapi.dev/api/people/${id}/`

class InfoBtnRamdom extends Component {
	constructor(){
		super();
		this.state = {
			persona: '',
			birth_year: '',
			valor: 1
		}
	}

	apiCall(url, consecuencia){
		fetch(url)
		.then( response => response.json())
		.then( data => consecuencia(data))
		.catch( error => console.log(error))
	}

	componentDidMount(){
		this.apiCall(api(this.state.valor), this.personaje)
	}

	personaje = (data) =>{
		this.setState({
			persona: data.name,
			birth_year: data.birth_year,
		})
	}
	aleatorio(){
		let numero = ()=>  Math.floor(Math.random() * 30) + 1
		this.setState({
			valor: numero(),
		})
	}
	
	render() { 
		return ( 
			<div>
				<h1>Nombre: {this.state.persona}</h1>
				<h4>Fecha de nacimiento: {this.state.birth_year}</h4>
				<Button 
					variant="contained" 
					color="primary" 
					onClick = {() => {this.aleatorio(); this.apiCall(api(this.state.valor), this.personaje)}}
				>Cambiar personaje</Button>
			</div>
		 );
	}
}
 
export default InfoBtnRamdom;