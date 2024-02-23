import Modal from "../Modal";
import Retrato from "../Retrato";
import "./Apresentacao.css";
import React, { useState } from "react";

const Apresentacao = ({ item }) => {
  const [open, setOpen] = useState(false);

  var medida = item.duracao ? "min" : "anos";

  return (
    <div className="container-apresentation">
      <div className="apresentation">
        <button className="apresentation-button" onClick={() => setOpen(true)}>
          <img
            src={item.imagem || item.foto}
            alt="Capa do filme A Origem"
            className="apresentation-img"
          />
        </button>
        {item.imagem ? (
          <Modal key={item.id} isOpen={open} setOpen={setOpen} item={item} />
        ) : (
          <Retrato key={item.id} isOpen={open} setOpen={setOpen} item={item} />
        )}
        <p className="title-filme">{item.titulo || item.nome}</p>
        <p className="information-filme">
          {item.duracao || item.idade} {medida} -{" "}
          {item.ano || item.dataNascimento}
        </p>
      </div>
    </div>
  );
};

export default Apresentacao;
