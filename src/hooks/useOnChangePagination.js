import { useState } from "react";

export const useOnChangePagination = () => {
  const [paginaactual, guardarPaginaActual] = useState(1);

  const paginaAnterior = () => {
    const newPageCurrent = paginaactual - 1;
    if (newPageCurrent === 0) return;
    guardarPaginaActual(newPageCurrent);
  };

  const paginaSiguiente = (totalpaginas) => {
    const newPageCurrent = paginaactual + 1;
    if (newPageCurrent > totalpaginas) return;
    guardarPaginaActual(newPageCurrent);
  };

  return [paginaactual, guardarPaginaActual, paginaAnterior, paginaSiguiente];
};
