import { Route, Routes } from "react-router-dom";
import Home from "./../pages/home";

const Routers = ({ data }) => {
  console.log(data);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/recente" element={<NotFound />} /> */}
    </Routes>
  );
};
export default Routers;
