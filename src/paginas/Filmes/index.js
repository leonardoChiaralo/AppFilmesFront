import { useEffect, useState } from "react";
import Apresentacao from "../../componentes/Apresentacao";
import Header from "../../componentes/Header";
import "./Filmes.css";
import axios from "axios";
import Paginacao from "../../componentes/Paginacao";
import Pesquisa from "../../componentes/Pesquisa";

const Filmes = () => {
  const [itens, setItens] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    listaItens();
  }, []);

  const listaItens = async () => {
    try {
      const response = await axios.get("https://localhost:7244/filme");
      setItens(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  const placeholder = "Digite o título de um filme";
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = itens.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="Filmes">
      <Header />
      <Pesquisa itens={itens} placeholder={placeholder} />
      <div className="filmes-container">
        {currentPosts.map((item) => (
          <Apresentacao item={item} />
        ))}
      </div>
      <Paginacao
        totalPosts={itens.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Filmes;
