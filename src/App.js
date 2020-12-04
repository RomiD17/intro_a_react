import React from 'react';
import Cuadro from './components/Cuadro';
import { Grid, Button, Container } from '@material-ui/core';
import Contador from './components/Contador';
import Info from './components/Info';
import AppBar from './components/AppBar';
import Botones from './components/Botones';
import InfoBtnRamdom from './components/InfoBtnRamdom' ;

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
    <Container maxWidth="lg">
      <AppBar/>
      <Grid container >
        <Grid item xs={4}>
        <Cuadro
          titulo = '20'
          texto= 'texto del cuadro 20'
        />
        </Grid>
      {contenido.map( (item, index) => 
      item.number > 1 ?  <Grid item xs={4} key={index}><Cuadro  titulo = {item.titulo} texto = {item.texto} /> </Grid>: '')
    }
      <Grid item xs={4}>
        <Cuadro>
          <Contador/>
          <Botones/>
        </Cuadro>
      </Grid>
      <Grid item xs={4}>
      <Cuadro>
        <InfoBtnRamdom/>
      </Cuadro>
      </Grid>
      <Grid item xs={4}>
      <Cuadro>
        <Info id = {4}/>
      </Cuadro>
      </Grid>
      <Grid item xs={4}>
      <Cuadro>
        <Info id = {4}/>
      </Cuadro>
    </Grid>
    </Grid>
    </Container>
  );
}


export default App;
