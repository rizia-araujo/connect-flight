// Recebe dados por "props" (como parâmetros de uma função).
export default function CardDestino({ nome, pais, descricao, emoji }) {
  return (
    <article className="card">
      <div className="card__emoji" aria-hidden="true">{emoji}</div>
      <h3>{nome}</h3>
      <span className="card__pais">{pais}</span>
      <p>{descricao}</p>
    </article>
  )
}
