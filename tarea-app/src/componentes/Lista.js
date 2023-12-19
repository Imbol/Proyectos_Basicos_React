import React, {useState} from "react";
import TareaForm from "./Formulario";
import Tarea from "./Tarea";
import "../hojas-estilo/Lista.css"

function Lista() {

    const [tareas, setTareas] = useState([]);
    const agregarTarea = tarea => {
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();

            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    }

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea =>{
            if(tarea.id === id){
                tarea.completo = !tarea.completo;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    }

    return(
        <>
            <TareaForm onSubmit={agregarTarea} />
            <div className="lista-tareas">{
                    tareas.map((tarea) => 
                        <Tarea 
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completo={tarea.completo}
                            completarTarea={completarTarea}
                            eliminarTarea={eliminarTarea}
                        />
                    )
                }
            </div>
        </>
    );
}

export default Lista;