import "./Pesquisa.css";
import Apresentacao from "../Apresentacao";
import { useState } from "react";

const Pesquisa = ({ itens, placeholder }) => {
  const [busca, setBusca] = useState("");

  const lowerCase = busca.toLowerCase();
  const itensFiltrados = itens.filter((item) =>
    (item.titulo || item.nome).toLowerCase().includes(lowerCase)
  );

  return (
    <div className="pesquisa">
      <input
        type="text"
        placeholder={placeholder}
        className="pesquisa-input"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <div className="pesquisa-container">
        {busca === "" ? (
          <p></p>
        ) : (
          itensFiltrados.map((item) => <Apresentacao item={item} />)
        )}
      </div>
    </div>
  );
};

export default Pesquisa;
