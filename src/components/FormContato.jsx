import { useState } from 'react'

// useState = "memória" do componente. Quando muda, a tela atualiza sozinha.
export default function FormContato() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })
  const [enviado, setEnviado] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault() // impede a página de recarregar
    setEnviado(true)
    setForm({ nome: '', email: '', mensagem: '' })
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Nome
        <input name="nome" value={form.nome} onChange={handleChange} required />
      </label>
      <label>
        E-mail
        <input type="email" name="email" value={form.email} onChange={handleChange} required />
      </label>
      <label>
        Mensagem
        <textarea name="mensagem" rows="4" value={form.mensagem} onChange={handleChange} required />
      </label>
      <button type="submit" className="botao">Enviar mensagem</button>
      {enviado && <p className="form__ok" role="status">Mensagem enviada! Responderemos em breve.</p>}
    </form>
  )
}
