import TituloPagina from '../components/TituloPagina.jsx'
import CardOferta from '../components/CardOferta.jsx'
import { ofertas } from '../data/ofertas.js'

export default function Ofertas() {
  return (
    <section>
      <TituloPagina titulo="Ofertas" subtitulo="Pacotes completos com preços arrasadores." />
      <div className="grade">
        {ofertas.map((o) => (
          <CardOferta key={o.id} {...o} />
        ))}
      </div>
    </section>
  )
}
