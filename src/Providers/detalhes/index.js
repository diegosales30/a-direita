import { createContext, useState } from "react";

export const DetalhesContext = createContext();

export const DetalhesProvider = ({ children }) => {
  const [data, setData] = useState();

  return (
    <DetalhesContext.Provider value={{ data, setData }}>
      {children}
    </DetalhesContext.Provider>
  );
};
