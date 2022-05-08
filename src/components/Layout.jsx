import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import useNoticias from "../hooks/useNoticias";

const Layout = () => {
  const { handleChangeCategoria } = useNoticias();
  const { pathname } = useLocation();

  return (
    <>
      <header>
        <div className="logo__container">
          <h1 className="logo__title">BBC NEWS | WORLD</h1>
        </div>

        <nav className="nav__container">
          <NavLink
            className={({ isActive }) =>
              isActive ? "link__active" : undefined
            }
            to="/"
            onClick={() => handleChangeCategoria("general")}
          >
            General
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link__active" : undefined
            }
            to="/negocios"
            onClick={() => handleChangeCategoria("business")}
          >
            Negocios
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link__active" : undefined
            }
            to="/entretenimiento"
            onClick={() => handleChangeCategoria("entertainment")}
          >
            Entretenimiento
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link__active" : undefined
            }
            to="/salud"
            onClick={() => handleChangeCategoria("health")}
          >
            Salud
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link__active" : undefined
            }
            to="/ciencia"
            onClick={() => handleChangeCategoria("science")}
          >
            Ciencia
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link__active" : undefined
            }
            to="/deportes"
            onClick={() => handleChangeCategoria("sports")}
          >
            Deportes
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link__active" : undefined
            }
            to="/tecnologia"
            onClick={() => handleChangeCategoria("technology")}
          >
            Tecnología
          </NavLink>
        </nav>
      </header>

      <div className="outlet__container">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
