import React from "react";
import "../hojas-estilo/Tarea.css"
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completo, completarTarea, eliminarTarea }) {
    return(
        <div className={completo ? "contenedor-tarea completo" : "contenedor-tarea"}>
            <div className="texto-tarea"
            onClick={ () => completarTarea(id) }>
                {texto}
            </div>
            <div className="contenedor-icono"
            onClick={ () => eliminarTarea(id) }> 
                <AiOutlineCloseCircle className="icono-tarea"/> 
            </div>
        </div>
    )
}

export default Tarea;