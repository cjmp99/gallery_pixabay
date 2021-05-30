import { useState } from "react";

export const useFetchImages = () => {
  const [imagenes, guardarImagenes] = useState([]);
  const [totalpaginas, guardarTotalPaginas] = useState(1);

  const consultarApi = async (busqueda, paginaactual) => {
    const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_KEY_PIXABAY}&q=${busqueda}&per_page=${process.env.REACT_APP_IMAGES_PER_PAGE}&page=${paginaactual}`;

    const response = await fetch(url);
    const results = await response.json();
    guardarImagenes(results.hits);
    const calcularPages = Math.ceil(
      results.totalHits / process.env.REACT_APP_IMAGES_PER_PAGE
    );
    guardarTotalPaginas(calcularPages);
    const jumbotron = document.querySelector(".jumbotron");
    jumbotron.scrollIntoView({ behavior: "smooth" });
  };

  return [imagenes, totalpaginas, consultarApi];
};

