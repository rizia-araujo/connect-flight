import { NavLink } from 'react-router-dom'

// Rodapé com os 3 links. NavLink = link do React Router (troca de página sem recarregar).
export default function Footer() {
  const links = [
    { to: '/destinos', texto: 'Destinos' },
    { to: '/ofertas', texto: 'Ofertas' },
    { to: '/contato', texto: 'Contato' },
  ]

  return (
    <footer className="footer">
      <nav className="footer__nav" aria-label="Navegação principal">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) => 'footer__link' + (isActive ? ' footer__link--ativo' : '')}
          >
            {l.texto}
          </NavLink>
        ))}
      </nav>
      <svg className="footer__onda" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 60C300 100 600 110 900 85C1150 65 1300 30 1440 0V120H0Z" fill="#3d3d52" />
      </svg>
    </footer>
  )
}
