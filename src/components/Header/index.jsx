import styles from "./styles.module.scss";

import { FiRadio } from "react-icons/fi";
import MenuHamburguer from "./../NavHamburguer/index";
import ModalMenu from "./../MobileNav/index";
const Header = () => {
  return (
    <>
      <header className={styles.container}>
        <h1>
          A Direita{" "}
          <span>
            <FiRadio />
          </span>
        </h1>
        <div className={styles.modal}>
          <MenuHamburguer />
        </div>

        <ul className={styles.nav}>
          <li>News</li>
          <li>Brasil</li>
          <li>Mundo</li>
          <li>Contato</li>
        </ul>
      </header>
      <ModalMenu />
    </>
  );
};

export default Header;
