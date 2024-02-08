import Apresentacao from "../Apresentacao";
import "./Section.css";

const Section = ({ filmes }) => {
  return (
    <section className="section">
      <p className="subtitle">Filmes</p>
      <p className="title">Populares</p>
      <div className="container">
        {filmes.map((filme) => (
          <Apresentacao filme={filme} />
        ))}
      </div>
    </section>
  );
};

export default Section;
