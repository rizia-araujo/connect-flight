import TituloPagina from '../components/TituloPagina.jsx'
import CardDestino from '../components/CardDestino.jsx'
import { destinos } from '../data/destinos.js'

export default function Destinos() {
  return (
    <section>
      <TituloPagina titulo="Destinos" subtitulo="Escolha para onde sua próxima viagem vai levar você." />
      <div className="grade">
        {destinos.map((d) => (
          <CardDestino key={d.id} {...d} />
        ))}
      </div>
    </section>
  )
}
