import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejoClick = () => {
    setNumClicks(numClicks + 1);
  }

  const reinicio = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='container'>
        <Contador numClicks={numClicks} />

        <Boton texto="click"
          botonClick={true}
          manejoClick={manejoClick} 
        />          
        <Boton texto="Reiniciar" 
          botonClick={false}
          manejoClick={reinicio} 
        />          
      </div>
    </div>
  );
}

export default App;
