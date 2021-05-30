import React from "react";
import Imagen from "./Imagen";
import { FaImage } from "react-icons/fa";

const ListaImagenes = ({ imagenes }) => {
  return (
    <div className="col-12 p-5 row">
      {imagenes.map((imagen) => (
        <Imagen key={imagen.id} imagen={imagen} />
      ))}

      {imagenes.length === 0 && (
        <div style={{ margin: "auto" }}>
          <FaImage size={140} style={{color: 'tomato'}}/>
          <p style={{ fontWeight: "bold" }} className="lead text-center">
            No hay resultados.
          </p>
        </div>
      )}
    </div>
  );
};

export default ListaImagenes;
