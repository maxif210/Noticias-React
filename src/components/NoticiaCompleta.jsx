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
    <div>
      <ul>
          <li>{author}</li>
          <li>{content}</li>
          <li>{description}</li>
          <li>{publishedAt}</li>
          <li>{title}</li>
          <li>{url}</li>
          <li>{urlToImage}</li>
          {/* <li>{source.name}</li> */}
      </ul>
    </div>
  );
};


export default NoticiaCompleta;
