import React from "react";
import "../hojas-estilo/Boton.css"

function Boton (props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor != '.') && (valor != '=');
    }

    return(
        <div 
            className={` boton-cotainer ${ esOperador(props.children) ? "operador" : null } `.trimEnd()}
            onClick={() => props.manejoClick(props.children)}>
            {props.children}
        </div>
    )
}

export default Boton;