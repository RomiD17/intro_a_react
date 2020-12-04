import React from 'react';
import Cuadro from './components/Cuadro';
import { Grid, Button } from '@material-ui/core';
import Contador from './components/Contador';
import Info from './components/Info';
import AppBar from './components/AppBar';
import Botones from './components/Botones'

 const contenido = [
   {
     titulo: 'Titulo 1',
     texto: 'Este texto es de prueba',
     number: 2,
    },
   {
     titulo: 'Series',
     texto: 'Este texto es de prueba',
     number: 1,
    },
   {
     titulo: 'Titulo 3',
     texto: 'Este texto es de prueba',
     number: 4
    },
  ]

function App() {
  return (
      <Grid container >
        {/* <AppBar/> */}
        <Grid item xs={4}>
        <Cuadro
          titulo = '20'
          texto= 'texto del cuadro 20'
        />
        </Grid>
      {contenido.map( (item, index) => 
      item.number > 1 ?  <Grid item xs={4} key={index}><Cuadro  titulo = {item.titulo} texto = {item.texto} /> </Grid>: '')
    }
      <Cuadro>
        <Contador/>
        <Botones/>
      </Cuadro>
      <Cuadro>
        <Info
          id = {5}
        />
        <Info
          id = {4}
        />
        <Info
          id = {8}
        />
        <Info
          id = {6}
        />
      </Cuadro>
    </Grid>
  );
}


export default App;
