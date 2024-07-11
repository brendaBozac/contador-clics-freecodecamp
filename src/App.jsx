import './App.css'
import freeCodeCampLogo from './img/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  /* trabajamos con hooks en el dinamismo del contador */
  const [numClics, setNumClics] = useState(0);
  
  /* aqui incorporamos la interactividad con esta funcion manejarClic */
  const manejarClic = () => {
    /* console.log("Clic"); */
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    /* console.log("Reiniciar") */
    setNumClics(0);
  }



  return (
    
  <div className='App'>
    <div className='freecodecamp-logo-contenedor'>
      <img
        className='freecodecamp-logo' 
        src={freeCodeCampLogo}
        alt="logo de freecodecamp" />
    </div>
  
    <div className='contenedor-principal'>
      <Contador numClics={numClics} />
      <Boton
        texto="Clic"
        esBotonDeClic={true}
        manejarClic={manejarClic} />
      
      <Boton
        texto="Reiniciar"
        esBotonDeClic={false}
        manejarClic={reiniciarContador} />
    </div>

  </div>
  )
}

export default App
