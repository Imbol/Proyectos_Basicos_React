import React from "react";
import '../hojas-estilo/Boton.css';

function Boton({ texto, botonClick, manejoClick }) {
    return(
        <button className={ botonClick ? "boton-click" : "boton-reinicio" }
            onClick={manejoClick}>
            {texto}
        </button>
    )
}

export default Boton;