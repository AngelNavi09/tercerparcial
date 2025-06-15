import { Routes, Route } from 'react-router-dom';
import Titulo from './components/Titulo';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import OfertaCursos from './pages/OfertaCursos';

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column"> 
      <Titulo />
      <Menu />
      <main className="flex-grow-1 p-3">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/oferta-cursos" element={<OfertaCursos />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;