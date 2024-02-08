import Modal from "../Modal";
import "./Apresentacao.css";
import React, { useState } from "react";

const Apresentacao = ({ filme }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container-apresentation">
      <div className="apresentation">
        <button className="apresentation-button" onClick={() => setOpen(!open)}>
          <img
            src={filme.imagem}
            alt="Capa do filme A Origem"
            className="apresentation-img"
          />
        </button>
        <Modal isOpen={open} setOpen={setOpen} filme={filme} />
        <p className="title-filme">{filme.titulo}</p>
        <p className="information-filme">
          {filme.duracao} min - {filme.ano}
        </p>
      </div>
    </div>
  );
};

export default Apresentacao;
