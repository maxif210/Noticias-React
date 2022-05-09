import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useNoticias from "../hooks/useNoticias";

const NoticiaCompleta = () => {
  const { noticias } = useNoticias();
  const [noticia, setNoticia] = useState("");
  console.log(noticia)

  const { author, content, description, publishedAt, source, title, url, urlToImage } = noticia;

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
       <img className="noticiaCompleta__img" src={urlToImage} alt="" />
     </figure>

     <article className="noticiaCompleta__texts">
      <h3 className="noticiaCompleta__title">{title}</h3>
      <h4 className="noticiaCompleta__description">{description}</h4>
      <p className="noticiaCompleta__content">{content}</p>

     </article>
          {/* <li>{author}</li>
          <li>{content}</li>
          <li>{description}</li>
          <li>{publishedAt}</li>
          <li>{title}</li>
          <li>{url}</li>
          <li>{urlToImage}</li>
          <li>{source.name}</li> */}
     
    </section>
  );
};


export default NoticiaCompleta;
