import styles from "./styles.module.scss";
import ContentBrasil from "./../ContentBrasil/index";

const Main = ({ saida }) => {
  return (
    <div className={styles.container}>
      <ContentBrasil saida={saida} />
    </div>
  );
};

export default Main;
