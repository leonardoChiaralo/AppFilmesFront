import "./Header.css";
import logo from "./imagens/app-filmes-logo.jpg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo DBMovies" className="logo" />
      <nav className="navegacao">
        <a href="/" className="link-spin">
          Home
        </a>
        <a href="/filmes" className="link-spin">
          Filmes
        </a>
        <a href="/artistas" className="link-spin">
          Artistas
        </a>
      </nav>
    </header>
  );
};

export default Header;
