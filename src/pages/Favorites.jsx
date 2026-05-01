import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <div className="container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <h1>⭐ Favorites</h1>

      <div className="grid">
        {favorites.map((p) => (
          <div className="card" key={p.name}>
            <h3>{p.name}</h3>
            <button onClick={() => removeFavorite(p.name)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;