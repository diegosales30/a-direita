import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ModalContext } from "./../../Providers/modal/index";

const ModalMenu = () => {
  const { open } = useContext(ModalContext);

  const navigate = useNavigate();
  const handleNavigation = (path) => {
    return navigate(path);
  };

  return (
    <div>
      {open ? (
        <ul className={styles.menu}>
          <li onClick={() => handleNavigation("/")}>Brasil</li>
          <li onClick={() => handleNavigation("/mundo")}>Mundo</li>
          {/* <li onClick={() => handleNavigation("/governo")}>Governo</li> */}
          {/* <li onClick={() => handleNavigation("/contato")}>Contato</li> */}
        </ul>
      ) : null}
    </div>
  );
};

export default ModalMenu;
