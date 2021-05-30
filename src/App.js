import React, { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import ListaImagenes from "./components/ListaImagenes";
import { useFetchImages } from "./hooks/useFetchImages";
import { useOnChangePagination } from "./hooks/useOnChangePagination";

function App() {
  const [busqueda, guardarBusqueda] = useState("");
  const [paginaactual, guardarPaginaActual, paginaAnterior, paginaSiguiente] =
    useOnChangePagination();
  const [imagenes, totalpaginas, consultarApi] = useFetchImages();

  useEffect(() => {
    if (busqueda === "") return;
    consultarApi(busqueda, paginaactual);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [busqueda, paginaactual]);

  return (
    <div className="container">
      <div className="jumbotron">
        <h2 style={{ fontWeight: "bold" }} className="text-center">
          Buscador de imágenes
        </h2>
        <Formulario
          guardarBusqueda={guardarBusqueda}
          guardarPaginaActual={guardarPaginaActual}
        />
      </div>

      <div className="row justify-content-center">
        <ListaImagenes imagenes={imagenes} />

        {imagenes.length !== 0 && (
          <>
            <button
              className="btn btn-info mr-1"
              onClick={paginaAnterior}
              disabled={paginaactual === 1 ? true : false}
            >
              &laquo; Anterior
            </button>
            <button
              className="btn btn-info"
              onClick={() => paginaSiguiente(totalpaginas)}
              disabled={paginaactual === totalpaginas ? true : false}
            >
              Siguiente &raquo;
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
