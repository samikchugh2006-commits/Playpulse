import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (player) => {
    setFavorites((prev) => {
      if (prev.find((p) => p.name === player.name)) return prev;
      return [...prev, player];
    });
  };

  const removeFromFavorites = (name) => {
    setFavorites((prev) => prev.filter((p) => p.name !== name));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};