import React, { Component } from 'react';

class Contador extends Component {
	constructor(){
		super();
		this.state = {
			valor: 1
		}
	}

aumentar(){
	this.setState({
		valor: this.state.valor + 1
	})
}

componentDidMount(){
	console.log('Se cargo')
}
componentDidUpdate(prevProps, prevState ){
	if(prevProps.numero == 10 ){
		
	}
	console.log('hay un cambio')
}

componentWillUnmount(){
	console.log('')
}

	render() { 
			return ( 
				<div>
					<p>{this.state.valor}</p>
					<button
						onClick = {() => this.aumentar()
						}
					>Contar</button>
				</div>
				);
	}
}
 
export default Contador;