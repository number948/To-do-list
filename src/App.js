import './App.css';
import mulgogiLogo from './imagenes/imagen-logo.png';

function App() {
  return (
    <div className="App">
      <div className= 'mulgogi-logo-contenedor'>
      <img 
      src={mulgogiLogo} 
      className='mulgogi-logo' 
      /> 
      </div>
      <div className = 'to-do-lista-principal'>
        <h1> To do List</h1>
        
      </div>
    </div>
  );
}

export default App;
