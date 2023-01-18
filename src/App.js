import "./App.css";
import { ListaDeTareas } from "./componentes/ListaDeTareas";
import freeCodeCampLogo from "./imagenes/fcc_primary_large.jpg";

function App() {
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='freecode-logo'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
