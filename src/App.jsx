import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
// import Tarjetas from './components/Tarjetas';
import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import ContenedorTarjetas from './components/ContenedorTarjetas/ContenedorTarjetas';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tarjetas" element={<ContenedorTarjetas />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
