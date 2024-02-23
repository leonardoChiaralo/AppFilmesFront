import { useEffect, useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import axios from "axios";
import "./Retrato.css";

const Retrato = ({ isOpen, setOpen, item }) => {
  const [colecao, setColecao] = useState([]);

  const data = new Date(`${item.dataNascimento}`);
  const dataFormatada = format(data, "dd 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });

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
              {dataFormatada} - {item.idade} anos
            </p>
            <p className="retrato-sobre">{item.sobre}</p>
            <div className="retrato-filmografia">
              <p className="retrato-filmografia-title">
                <span className="retrato-span">Filmografia:</span>
              </p>
              <ul className="retrato-filmografia-list">
                {colecao.map((itemColecao) => (
                  <li key={itemColecao.id} className="retrato-filmografia-text">
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
