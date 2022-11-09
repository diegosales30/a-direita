import styles from "./styles.module.scss";

import { useContext } from "react";
import { ModalContext } from "./../../Providers/modal/index";

const ModalMenu = () => {
  const { open } = useContext(ModalContext);

  return (
    <div>
      {open ? (
        <ul className={styles.menu}>
          <li>News</li>
          <li>Brasil</li>
          <li>Mundo</li>
          <li>Contato</li>
        </ul>
      ) : null}
    </div>
  );
};

export default ModalMenu;
