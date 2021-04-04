
/* function App() {
  return (
    <div className="App">
      CAMILO
    </div>
  );
}


export default App; */

import { Component } from "react";
import Buscador from './componentes/Buscador';
import Resultados from './componentes/Resultados';


class App extends Component {

  state = {
    termino : '',
    imagenes : []
  }

  consultarApi = () => {
    const url = `https://pixabay.com/api/?key=20672269-1ee67a7b822fb940e942ea086&q=${this.state.termino}&per_page=50`;

    console.log(url);
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState( {imagenes: resultado.hits } ))

  }

  datosBusqueda = (termino) => {
    this.setState({
      termino 
    }, () => {
      this.consultarApi();
    })
  }


  render() {
      return(
          <div className="app container">
            <div className="jumbotron">
              <p className="lead text-center">BUSCADOR DE IMÁGENES </p>

              <Buscador 
                datosBusqueda={this.datosBusqueda}
              />
       
            </div>
            <Resultados
              imagenes={this.state.imagenes}
            />
            {this.state.termino}
            <h1>HOLA MUNDO PRUEBA GITHUB DESDE VISUAL STUDIO CODE2</h1>
          </div>
      );
  }
}

export default App;