import useNoticias from "../hooks/useNoticias";

const CATEGORIAS = [
  { value: "general", label: "General" },
  { value: "business", label: "Negocios" },
  { value: "entertainment", label: "Entretenimiento" },
  { value: "health", label: "Salud" },
  { value: "science", label: "Ciencia" },
  { value: "sports", label: "Deportes" },
  { value: "technology", label: "Tecnología" },
];
const Formulario = () => {
  const { categoria, handleChangeCategoria } = useNoticias();

  return <form></form>;
};

export default Formulario;
