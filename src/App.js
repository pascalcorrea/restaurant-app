import { Routes, Route } from 'react-router-dom';
import Inicio from './views/Inicio';
import Carta from './views/Carta';
import Contacto from './views/Contacto';
import ReservarHora from './views/ReservarHora'; 

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/carta" element={<Carta/>} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/reservar-hora" element={<ReservarHora/>} />
      </Routes>
    </>
  );
}

export default App;
