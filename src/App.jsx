import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Destinos from './pages/Destinos.jsx'
import Ofertas from './pages/Ofertas.jsx'
import Contato from './pages/Contato.jsx'

// App define o "mapa de rotas": cada URL mostra uma página.
// Layout fica por fora e é reaproveitado (rodapé + onda aparecem em todas).
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/contato" element={<Contato />} />
      </Route>
    </Routes>
  )
}
