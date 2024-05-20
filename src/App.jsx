import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './components/principal/Home';
import Asientos from './components/asientos/Asientos';
import Confirmacion from './components/confirmacion/Confirmacion';
import Horarios from './components/horarios/Horarios';
import Login from './components/login/Login';
import Pago from './components/pago/Pago';
import RegistroTarjeta from './components/registrotarjeta/Registrotarjeta';
import RegistroUsuarios from './components/registrousuarios/Registrousuarios';
import Snacks from './components/snacks/Snacks';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/horario" element={<Horarios />} />
        <Route path="/asientos" element={<Asientos />} />
        <Route path="/snacks" element={<Snacks />} />
        <Route path="/pago" element={<Pago />} />
        <Route path="/confirmacion" element={<Confirmacion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<RegistroUsuarios />} />
        <Route path="/registrotarjeta" element={<RegistroTarjeta />} />
      </Routes>
    </Router>
  );
}
export default App;