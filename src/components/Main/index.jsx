import styles from "./styles.module.scss";
import ContentBrasil from "./../ContentBrasil/index";
import Aside from "./../AsideMundo/index";

const Main = ({ saida }) => {
  return (
    <div className={styles.container}>
      <Aside />
      <ContentBrasil saida={saida} />
    </div>
  );
};

export default Main;
