import { DetalhesProvider } from "./detalhes";
import { ModalProvider } from "./modal";

const Provider = ({ children }) => {
  return (
    <DetalhesProvider>
      <ModalProvider>{children}</ModalProvider>
    </DetalhesProvider>
  );
};
export default Provider;
