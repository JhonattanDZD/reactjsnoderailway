import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Consulta from "./pages/Consulta";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultas" element={<Consulta />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
