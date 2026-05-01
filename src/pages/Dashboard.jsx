import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

export default function Dashboard() {
  const { favorites } = useContext(FavoritesContext);

  const counts = {
    Batsman: 0,
    Bowler: 0,
    "All-rounder": 0,
    Wicketkeeper: 0
  };

  favorites.forEach(p => counts[p.role]++);

  return (
    <div className="container">
      <h1>📊 Analytics Dashboard</h1>

      <div className="stats">
        {Object.entries(counts).map(([role, count]) => (
          <div className="stat-card" key={role}>
            <h3>{role}</h3>
            <p>{count}</p>
          </div>
        ))}
      </div>

      <h2>Total Favorites: {favorites.length}</h2>
    </div>
  );
}