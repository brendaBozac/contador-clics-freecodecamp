import React from "react";
import "../hojas-de-estilos/Contador.css"

/* sintaxis de desestructuracion en props numClics */
function Contador({ numClics }) {

  return (
    <div className="contador">
      {numClics}
    </div>
  )
}

export default Contador;