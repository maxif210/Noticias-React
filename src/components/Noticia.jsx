import { Link, NavLink } from "react-router-dom";


const Noticia = ({ noticia }) => {
  const { author, title, urlToImage, publishedAt } = noticia;
  
  return (
    <div className="card">
      <img
        className="card__img"
        src={urlToImage}
        alt={`Nombre del autor ${author}`}
      ></img>
      <div className="card__texts">
        <h4 className="card__title">
          <NavLink to={`/noticia/${title}`}>
            {title}
          </NavLink>
          
        </h4>
      </div>
      <span className="card__publishedAt">{publishedAt}</span>
    </div>
  );
};

export default Noticia;
