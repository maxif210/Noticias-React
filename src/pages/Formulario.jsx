import React from 'react'


const Formulario = () => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  return (
    <div className='form'>
      <form className='form__container' action="#" method="post">
    <div >
      <label for="name"></label>
      <input onChange={(e)=>setNombre(e.target.value)} className='form__input' type="text" placeholder="Nombre" name="name" required/>
    </div>
    <div >
      <label for="email"></label>
      <input onChange={(e)=>setEmail(e.target.value)} className='form__input' type="email" placeholder="Email" name="email" required/>
    </div>
    <div >
      <label for="message"></label>
      <textarea onChange={(e)=>setMensaje(e.target.value)} className="form__input" name="mensaje" placeholder="Alguna sugerencia?" cols="30" rows="5" required></textarea>
    </div>
    <div className="form__submit">
    <button type='submit' className="btn-40">
    <span className="old">Suscribite</span>
    <span className="new">Aca</span>
    </button>
    </div>
  </form>
    </div>
    
  )
}

export default Formulario