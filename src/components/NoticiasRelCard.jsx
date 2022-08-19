import { NavLink } from "react-router-dom"


const NoticiasRelCard = ({imgNoticia, imgTitle}) => {
    const {urlToImage} = imgNoticia
  return (
    <section className="noticiaRel__container">
     <figure className="noticiaRel__figure">
        <NavLink className="noticiaRel_title" to={`/noticia/${imgTitle}`}>{imgTitle}</NavLink>
       <img className="noticiaRel__img" src={urlToImage} alt="" />

       </figure>
    </section>
  )
}

export default NoticiasRelCard