import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useNoticias from "../hooks/useNoticias";
import  imgPublicidad  from "../assets/Black-Friday.jpg";
import NoticiasRelCard from "./NoticiasRelCard";

const NoticiaCompleta = () => {
  const { noticias } = useNoticias();
  const [noticia, setNoticia] = useState("");
  const noticiasRel = noticias.slice(0,5)
 

  
  const { author, content, description, publishedAt,  title,  urlToImage } = noticia;

  const { id } = useParams();
//   console.log(id);

  useEffect(() => {
    const filtrarNoticia = (id) => {
     const noticiaFiltrada = noticias.find(not => not.title === id)
      setNoticia(noticiaFiltrada);
       
    };

    filtrarNoticia(id);
  }, [id]);

  return (
    <section className="noticiaCompleta">
     <figure className="noticiaCompleta__figure">
       <img className="noticiaCompleta__publicidad" src={imgPublicidad} alt="" />
       <img className="noticiaCompleta__img" src={urlToImage} alt="" />
       <img className="noticiaCompleta__publicidad" src={imgPublicidad} alt="" />
      
     </figure>

     
      <div  className="noticiaCompleta__textContainer">
     <article className="noticiaCompleta__texts">
      <h3 className="noticiaCompleta__title">{title}</h3>
      <h4 className="noticiaCompleta__description">{description}</h4>
      <p className="noticiaCompleta__content">{content}</p>
      <p className="noticiaCompleta__author">By {author}</p>
      <p className="noticiaCompleta__publishedAt">{publishedAt}</p>
     </article>
      </div>

        
          
         <article className="noticiasRel__container">
         <h3 className="noticiasRel__text">Noticias Relacionadas</h3>
          {noticiasRel.map(imgNoticia=>(
            <NoticiasRelCard key={imgNoticia.title} imgNoticia={imgNoticia} imgTitle={imgNoticia.title}/>
          ))}
         </article>
    </section>
  );
};


export default NoticiaCompleta;
