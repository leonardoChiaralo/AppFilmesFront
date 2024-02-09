import { useEffect, useState } from "react";
import axios from "axios";
import "./Modal.css";

const Modal = ({ isOpen, setOpen, item }) => {
  const [colecao, setColecao] = useState();

  useEffect(() => {
    listaColecao();
  }, []);

  const listaColecao = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7244/artistafilme/elenco/${item.id}`
      );
      setColecao(response.data);
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
            src={item.imagem}
            alt={`Capa do filme ${item.titulo}`}
            className="modal-img"
          />
          <div className="modal-container">
            <p className="modal-title">{item.titulo}</p>
            <p className="modal-original"> {item.original}</p>
            <p className="modal-sinopse">{item.sinopse}</p>
            <p className="modal-info">
              <span className="span-title">Diretor: </span>
              {item.diretor}
            </p>
            <p className="modal-info">
              <span className="span-title">Ano de lançamento: </span>
              {item.ano}
            </p>
            <p className="modal-info">
              <span className="span-title">Gênero: </span>
              {item.genero}
            </p>
            <p className="modal-info">
              <span className="span-title">Duração: </span>
              {item.duracao} min
            </p>
            <p className="modal-info">
              <span className="span-title">IMDB: </span>
              {item.nota}
            </p>
            <div className="modal-elenco">
              <p className="modal-elenco-title">
                <span className="span-title">Elenco:</span>
              </p>
              <ul className="modal-elenco-container">
                {colecao.map((itemColecao) => (
                  <li className="modal-elenco-text">{itemColecao.artista}</li>
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
