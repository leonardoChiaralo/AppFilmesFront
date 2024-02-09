import { useEffect, useState } from "react";
import "./Home.css";
import Header from "../../componentes/Header";
import axios from "axios";
import Section from "../../componentes/Section";
import Modal from "../../componentes/Modal";
import Slogan from "../../componentes/Slogan";

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    listaFilmes();
  }, []);

  const listaFilmes = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7244/filme/destaques"
      );
      console.log(response);
      setFilmes(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="Home">
      <Header />
      <Slogan />
      <Section filmes={filmes} />
      <Modal />
    </div>
  );
}

export default Home;
