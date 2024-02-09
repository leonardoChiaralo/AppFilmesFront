import { Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import Filmes from "./paginas/Filmes";
import Artistas from "./paginas/Artistas";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/filmes" Component={Filmes} />
      <Route path="/artistas" Component={Artistas} />
    </Routes>
  );
}

export default MainRoutes;
