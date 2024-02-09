import { useEffect, useState } from "react";
import axios from "axios";
import "./Retrato.css";

const Retrato = ({ isOpen, setOpen, item }) => {
  const [colecao, setColecao] = useState([]);

  useEffect(() => {
    listaColecao();
  }, []);

  const listaColecao = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7244/artistafilme/filmografia/${item.id}`
      );
      setColecao(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
    if (!e.target.closest(".retrato-container")) {
      setOpen(false);
    }
  };

  if (isOpen) {
    return (
      <div className="Retrato" onClick={handleClick}>
        <div className="retrato-container">
          <img
            src={item.foto}
            alt={`Foto do artista ${item.nome}`}
            className="retrato-img"
          />
          <div className="retrato-info-container">
            <p className="retrato-nome">{item.nome}</p>
            <p className="retrato-info">
              {item.dataNascimento} - {item.idade} anos
            </p>
            <p className="retrato-sobre">{item.sobre}</p>
            <div className="retrato-filmografia">
              <p className="retrato-filmografia-title">
                <span className="retrato-span">Filmografia:</span>
              </p>
              <ul className="retrato-filmografia-list">
                {colecao.map((itemColecao) => (
                  <li className="retrato-filmografia-text">
                    {itemColecao.filme}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Retrato;
