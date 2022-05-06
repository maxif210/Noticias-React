import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <div className="logo__container">
          <h1 className="logo__title">BBC NEWS | WORLD</h1>
        </div>

        <nav className="nav__container">
          <Link to="/">General</Link>
          <Link to="/negocios">Negocios</Link>
          <Link to="/entretenimiento">Entretenimiento</Link>
          <Link to="/salud">Salud</Link>
          <Link to="/ciencia">Ciencia</Link>
          <Link to="/deportes">Deportes</Link>
          <Link to="/tecnologia">Tecnología</Link>
        </nav>
      </header>

      
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
