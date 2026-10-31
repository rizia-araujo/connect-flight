export default function CardOferta({ titulo, preco, desconto, inclui }) {
  return (
    <article className="card card--oferta">
      <span className="card__selo">{desconto}</span>
      <h3>{titulo}</h3>
      <ul className="card__lista">
        {inclui.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="card__preco">{preco}</p>
      <button type="button" className="botao">Quero essa oferta</button>
    </article>
  )
}
