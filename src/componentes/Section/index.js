import Apresentacao from "../Apresentacao";
import "./Section.css";

const Section = ({ itens }) => {
  return (
    <section className="section">
      <p className="subtitle">Filmes</p>
      <p className="title">Populares</p>
      <div className="container">
        {itens.map((item) => (
          <Apresentacao key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Section;
