import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import useNoticias from "../hooks/useNoticias";
import  usFlag from "../assets/America.svg";
import  arFlag from "../assets/Argentina.svg";
import  logo from "../assets/logo.png";

const Layout = () => {
  const { handleChangeCategoria } = useNoticias();
  const { pathname } = useLocation();
  const { setPais,  } = useNoticias();
  const navigate = useNavigate()

  const handleClick = ()=> {
    navigate('/formulario')
  }

  const handleBtnUs = () => {
    setPais('us')
    
  }

  const handleBtnAr = ()=>{
    setPais('ar')
    
  }

  return (
    <>
      <header>
        <div className="header__container">
          <div className="logo__container">
          <div className="banderas__container">
          <button onClick={handleBtnUs} className="banderas__btn"><img className="banderas" src={usFlag} alt="" /></button>
          <button onClick={handleBtnAr} className="banderas__btn"><img className="banderas" src={arFlag} alt="" /></button>
          </div>
          <img className="logo" src={logo} alt="" />
          </div>
          <button onClick={handleClick} className="button__subs"> <span>Sumate a nuestros Suscriptores</span></button>
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
