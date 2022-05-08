import useNoticias from "../hooks/useNoticias";
import Noticia from "./Noticia";

export const ListadoNoticias = () => {
  const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias();
 

  const totalPaginas = Math.ceil(totalNoticias / 20);
  
  return (
    <>
      <div className="card__container">
        {noticias.map((noticia) => (
          <Noticia key={noticia.url} noticia={noticia} />
        ))}
      </div>
    </>
  );
};
