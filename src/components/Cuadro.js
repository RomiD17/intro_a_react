import React from 'react';
import './Cuadro.css';
import PropTypes from 'prop-types';

function Cuadro(props) {
    return (
      <div className="contenedor" >
        <h1>{props.titulo}</h1>
       <p >{props.texto}</p>
       {props.children}
      </div>
    );
  }

Cuadro.propTypes = {
  titulo: PropTypes.string.isRequired,
}

export default Cuadro;