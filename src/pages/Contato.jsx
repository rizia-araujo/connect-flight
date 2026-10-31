import TituloPagina from '../components/TituloPagina.jsx'
import FormContato from '../components/FormContato.jsx'

export default function Contato() {
  return (
    <section>
      <TituloPagina titulo="Contato" subtitulo="Fale com a gente. Ficamos felizes em ajudar a planejar sua viagem." />
      <FormContato />
    </section>
  )
}
