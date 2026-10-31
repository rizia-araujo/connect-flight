import Ilustracao from './Ilustracao.jsx'

// Hero = a "vitrine" da página inicial: ilustração + título + textos.
export default function Hero() {
  return (
    <section className="hero">
      <Ilustracao />
      <h1 className="hero__titulo">
        O seu próximo <span className="destaque">destino</span> pode estar aqui...
      </h1>
      <p className="hero__texto">
        Aqui você encontra uma seleção de <strong>pacotes completos</strong> para as suas férias!
      </p>
      <p className="hero__texto">
        No <strong>ConnectFlight</strong> você encontra pacotes de viagens nacionais e
        internacionais que incluem: passagens aéreas, hotéis, café da manhã, e até seguro
        viagem com <strong>preços arrasadores</strong>!
      </p>
      <p className="hero__texto hero__texto--claro">
        Se você ainda não tem um destino definido, confira nossa seção de ofertas.
      </p>
    </section>
  )
}
