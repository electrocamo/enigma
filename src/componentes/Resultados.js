import React, { Component } from 'react';
import Imagen from './Imagen';
import Paginacion from './Paginacion';

class Resultados extends Component {

    paginaAnterior = () => {
        console.log('anterior...');
    }

    paginaSiguiente = () => {
        console.log('siguiente...');
    }


    mostrarImagenes = () => {
        const imagenes = this.props.imagenes;

        if(imagenes.length === 0 ) return null;

        return(
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {imagenes.map(imagencitas => (
                        <Imagen
                            key={imagencitas.id}
                            imagen={imagencitas}
                        />
                    ))}
                </div>
                <div className="row justify-content-center">
                    <Paginacion
                        paginaAnterior= {this.paginaAnterior}
                        paginaSiguiente= {this.paginaSiguiente}
                    />
                </div>
            </React.Fragment>

        )

    }
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                {this.mostrarImagenes()}
            </React.Fragment>
         );
    }
}
 
export default Resultados;