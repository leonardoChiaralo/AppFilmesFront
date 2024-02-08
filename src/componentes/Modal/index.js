import { useEffect, useState } from "react";
import axios from "axios";
import "./Modal.css";

const Modal = ({ isOpen, setOpen, filme }) => {
  const [elenco, setElenco] = useState();

  useEffect(() => {
    listaElenco();
  });

  const listaElenco = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7244/artistafilme/elenco/${filme.id}`
      );
      setElenco(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
    if (!e.target.closest(".modal")) {
      setOpen(false);
    }
  };

  if (isOpen) {
    return (
      <div className="background" onClick={handleClick}>
        <div className="modal">
          <img
            src={filme.imagem}
            alt={`Capa do filme ${filme.titulo}`}
            className="modal-img"
          />
          <div className="modal-container">
            <p className="modal-title">{filme.titulo}</p>
            <p className="modal-original"> {filme.original}</p>
            <p className="modal-sinopse">{filme.sinopse}</p>
            <p className="modal-info">
              <span className="span-title">Diretor: </span>
              {filme.diretor}
            </p>
            <p className="modal-info">
              <span className="span-title">Ano de lançamento: </span>
              {filme.ano}
            </p>
            <p className="modal-info">
              <span className="span-title">Gênero: </span>
              {filme.genero}
            </p>
            <p className="modal-info">
              <span className="span-title">Duração: </span>
              {filme.duracao} min
            </p>
            <p className="modal-info">
              <span className="span-title">IMDB: </span>
              {filme.nota}
            </p>
            <div className="modal-elenco">
              <p className="modal-elenco-title">
                <span className="span-title">Elenco:</span>
              </p>
              <ul className="modal-elenco-container">
                {elenco.map((artista) => (
                  <li className="modal-elenco-text">{artista.artista}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Modal;
