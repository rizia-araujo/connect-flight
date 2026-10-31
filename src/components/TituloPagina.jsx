// Componente reutilizável: título + subtítulo de cada página interna.
export default function TituloPagina({ titulo, subtitulo }) {
  return (
    <header className="titulo-pagina">
      <h1>{titulo}</h1>
      <p>{subtitulo}</p>
    </header>
  )
}
