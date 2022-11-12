import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { FiRadio } from "react-icons/fi";
import MenuHamburguer from "./../NavHamburguer/index";
import ModalMenu from "./../MobileNav/index";
import Title from "./../Title/index";

const Header = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    return navigate(path);
  };
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
          <li onClick={() => handleNavigation("/")}>Brasil</li>
          <li onClick={() => handleNavigation("/mundo")}>Mundo</li>
          {/* <li onClick={() => handleNavigation("/governo")}>Governo</li> */}
          <li onClick={() => handleNavigation("/contato")}>Contato</li>
        </ul>
      </header>

      <ModalMenu />
      <Title>
        {/* <marquee direction="left" className={styles.marquee}>
          <span>
            Bem-vindo ao Site A Direita. aqui você encontra as notícias da
            maneira certa
          </span>

          <span>
            qui é continous ao Site A Direita. aqui você encontra as notícias da
            maneira certa
          </span>
        </marquee> */}
      </Title>
    </>
  );
};

export default Header;
