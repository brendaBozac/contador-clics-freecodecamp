import React from "react";
import "../hojas-de-estilos/Boton.css"

/* en lugar de props en paramentros, directamente nos referimos a la propiedad
por su nombre (texto), es sintaxis de desestructuracion y es como mas se usa.
 */
function Boton({ texto, esBotonDeClic, manejarClic }) {

  /* aqui en el boton usamos operador ternario, para definir estado del boton casi como un
  toggle, clases que se asignan de forma dinamica. */
  return (
    <button
      className={ esBotonDeClic ? "boton-clic" : "boton-reiniciar" }
      onClick={manejarClic}>
      {texto}
    </button>
  )
}

export default Boton;