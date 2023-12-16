import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonBorrar from './componentes/BotonBorrar';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  const [input, setInput] = useState('');
  const agregarInput = val => {
    setInput(input + val);
  };

  const calcular = () => {
    if(input){
      setInput(evaluate(input));
    }else{
      alert("por favor ingresar valores para realizar el cálculo")
    }
    
  };

  return (
    <div className="App">
      <div className='container-calculator'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejoClick={agregarInput}>1</Boton>
          <Boton manejoClick={agregarInput}>2</Boton>
          <Boton manejoClick={agregarInput}>3</Boton>
          <Boton manejoClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejoClick={agregarInput}>4</Boton>
          <Boton manejoClick={agregarInput}>5</Boton>
          <Boton manejoClick={agregarInput}>6</Boton>
          <Boton manejoClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejoClick={agregarInput}>7</Boton>
          <Boton manejoClick={agregarInput}>8</Boton>
          <Boton manejoClick={agregarInput}>9</Boton>
          <Boton manejoClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejoClick={calcular}>=</Boton>
          <Boton manejoClick={agregarInput}>0</Boton>
          <Boton manejoClick={agregarInput}>.</Boton>
          <Boton manejoClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonBorrar manejoBorrar= {() => setInput('')}>Borrar</BotonBorrar>
        </div>
      </div>
    </div>
  );
}

export default App;
