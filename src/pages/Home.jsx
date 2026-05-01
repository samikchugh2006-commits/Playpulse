import { useState, useContext } from "react";
import { teams } from "../data/teams.js";
import { FavoritesContext } from "../context/FavoritesContext";

export default function Home() {
  const [team, setTeam] = useState("MI");
  const { addToFavorites } = useContext(FavoritesContext);

  return (
    <div className="container">
      <h1>🏏 IPL Player Explorer</h1>

      <select onChange={(e) => setTeam(e.target.value)}>
        {Object.keys(teams).map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      <div className="grid">
        {teams[team].map((player, i) => (
          <div className="card" key={i}>
            <h3>{player.name}</h3>
            <p>{player.role}</p>
            <button onClick={() => addToFavorites(player)}>
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}