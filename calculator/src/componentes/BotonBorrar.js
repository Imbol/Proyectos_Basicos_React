import React from "react";
import "../hojas-estilo/BotonBorrar.css"

const BotonBorrar = (props) => (
    <div className="boton-borrar" onClick={props.manejoBorrar}>
        {props.children}
    </div>
)

export default BotonBorrar;