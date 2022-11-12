import { Route, Routes } from "react-router-dom";
import BrasilPage from "../pages/Brasil";
//import Governo from "../pages/Governo";

//import Contato from "./../pages/Contato/index";
import Details from "../pages/DetailsBrasil";
import DetailsMundo from "../pages/DetailsMundo";
import MundoPage from "../pages/Mundo";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<BrasilPage />} />
      <Route path="/mundo" element={<MundoPage />} />
      {/* <Route path="/governo" element={<Governo />} /> */}
      {/* <Route path="/contato" element={<Contato />} /> */}
      <Route path="/details-brasil/:id" element={<Details />} />
      <Route path="/details-mundo/:id" element={<DetailsMundo />} />
    </Routes>
  );
};

export default Routers;
