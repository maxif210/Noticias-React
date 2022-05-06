import { Link } from "react-router-dom";

const Noticia = ({ noticia }) => {
  const { author, title, description, url, urlToImage, publishedAt } = noticia;

  return (
      <div className="card">
        <img className="img" src={urlToImage} alt={`Nombre del autor ${author}`}></img>
        <div className="body">
        <h4 className="title">{title}</h4>
        <h5 className="author">{`Por: ${author}`}</h5>
        <hr />
        <p className="description">{description}</p>
        <button className="url">
        <a href={url} target="_blank">Ver más</a>
        </button>
        <span className="publishedAt">{publishedAt}</span>
        </div>
      </div>
   
  );
};

export default Noticia;
