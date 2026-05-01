import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav style={{ padding: "15px", display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}
