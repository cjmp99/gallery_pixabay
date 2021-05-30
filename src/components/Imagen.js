import React from "react";
import { FaEye, FaThumbsUp } from "react-icons/fa";

const Imagen = ({ imagen }) => {
  const { largeImageURL, likes, previewURL, tags, views } = imagen;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
      <div className="card">
        <img
          style={{ width: "100%", height: "150px", objectFit: "cover" }}
          src={previewURL}
          alt={tags}
        />

        <div className="card-body">
          <p className="card-text text-center">
            {likes}{" "} <FaThumbsUp /> Me Gusta
          </p>
          <p className="card-text text-center">
            {views}{" "} <FaEye /> Vistas
          </p>
        </div>
        <div className="card-footer">
          <a
            href={largeImageURL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-block"
          >
            Ver Imagen
          </a>
        </div>
      </div>
    </div>
  );
};

export default Imagen;
