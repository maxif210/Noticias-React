
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import { ListadoNoticias } from "../components/ListadoNoticias";
import { NoticiasProvider } from "../context/NoticiasProvider";
import Ciencia from "./Ciencia";
import Deportes from "./Deportes";
import Entretenimiento from "./Entretenimiento";
import Inicio from "./Inicio";
import Negocios from "./Negocios";
import Salud from "./Salud";
import Tecnologia from "./Tecnologia";

function App() {
  return (
    <BrowserRouter>
      <NoticiasProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="negocios" element={<Negocios />} />
            <Route path="entretenimiento" element={<Entretenimiento />} />
            <Route path="salud" element={<Salud />} />
            <Route path="ciencia" element={<Ciencia />} />
            <Route path="deportes" element={<Deportes />} />
            <Route path="tecnologia" element={<Tecnologia />} />
          </Route>
        </Routes>
      </NoticiasProvider>
    </BrowserRouter>
  );
}

export default App;
