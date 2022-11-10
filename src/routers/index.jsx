import { Route, Routes } from "react-router-dom";
import BrasilPage from "../pages/Brasil";
import Governo from "../pages/Governo";
import Mundo from "../pages/Mundo";
import Contato from "./../pages/Contato/index";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<BrasilPage />} />
      <Route path="/mundo" element={<Mundo />} />
      <Route path="/governo" element={<Governo />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
};

export default Routers;
