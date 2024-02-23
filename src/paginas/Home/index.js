import { useEffect, useState } from "react";
import "./Home.css";
import Header from "../../componentes/Header";
import axios from "axios";
import Section from "../../componentes/Section";
import Modal from "../../componentes/Modal";
import Slogan from "../../componentes/Slogan";

function Home() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    listaItens();
  }, []);

  const listaItens = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7244/filme/destaques"
      );
      console.log(response);
      setItens(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="Home">
      <Header />
      <Slogan />
      <Section itens={itens} />
      <Modal />
    </div>
  );
}

export default Home;
