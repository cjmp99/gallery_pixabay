import React, { useState } from "react";
import Error from "./Error";

const Formulario = ({ guardarBusqueda, guardarPaginaActual }) => {
  const [termino, guardarTermino] = useState("");
  const [error, guardarError] = useState(false);

  const buscarImagenes = (e) => {
    e.preventDefault();
    guardarPaginaActual(1)
    guardarTermino("")

    if (termino.trim() === "") {
      guardarError(true);
      return;
    } else {
      guardarError(false);
      guardarBusqueda(termino);
    }
  };

  return (
    <form onSubmit={buscarImagenes}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            value={termino}
            className="form-control form-control-lg"
            placeholder="Buscar una imagen ejemplo: futbol o café"
            onChange={(e) => guardarTermino(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btm btn-lg btn-danger btn-block"
            value="Buscar"
          />
        </div>
      </div>
      {error && <Error message="Agregue un término de búsqueda" />}
    </form>
  );
};

export default Formulario;
