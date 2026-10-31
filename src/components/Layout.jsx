import { Outlet, Link } from 'react-router-dom'
import Footer from './Footer.jsx'

// Layout = "moldura" fixa. <Outlet /> é o buraco onde a página da rota atual aparece.
export default function Layout() {
  return (
    <div className="layout">
      <Link to="/" className="layout__marca">ConnectFlight</Link>
      <main className="layout__conteudo">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
