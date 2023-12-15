import React from "react";
import '../hojas-estilo/Titan.css'

function Titanes(props) {
    return(
        <div className="container-titan">
            <img className="img-titan" 
            src={require(`../imagenes/Titan_${props.imagen}.jpg`)}
            alt=""/>
            <div className="text-titan">
                <p className="nom-titan">{props.nombre}</p>
                <p className="description">{props.descripcion}</p>                
            </div>        
        </div>       
    );
}

export default Titanes;