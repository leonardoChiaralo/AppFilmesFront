import "./Artistas.css";
import axios from "axios";
import Header from "../../componentes/Header";
import Pesquisa from "../../componentes/Pesquisa";
import { useEffect, useState } from "react";
import Apresentacao from "../../componentes/Apresentacao";
import Paginacao from "../../componentes/Paginacao";

const Artistas = () => {
  const [itens, setItens] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  useEffect(() => {
    listaItens();
  }, []);

  const listaItens = async () => {
    try {
      const response = await axios.get("https://localhost:7244/artista");
      setItens(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  const placeholder = "Digite o nome de um artista";
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = itens.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="Artistas">
      <Header />
      <Pesquisa itens={itens} placeholder={placeholder} />
      <div className="artistas-container">
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

export default Artistas;
