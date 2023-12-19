import React, { useState } from "react";
import "../hojas-estilo/Formulario.css"
import { v4 as uuidv4 } from 'uuid';

function TareaForm(props){

    const [input, setInput] = useState("");

    const cambio = e => {
        setInput(e.target.value);
    }

    const envio = e => {
        e.preventDefault();
        
        const nuevaTarea = {
            id: uuidv4(),
            texto: input,
            completo: false
        }

        props.onSubmit(nuevaTarea);
    }

    return(
        <form className="tarea-form"
        onSubmit={envio}>
            <input 
            className="tarea-input"
            type="text"
            placeholder="Escribe una Tarea"
            name="texto"
            onChange={cambio}
            />
            <button className="tarea-boton">Agregar Tarea</button>
        </form>
    )
}

export default TareaForm;