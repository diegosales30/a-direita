import styles from "./styles.module.scss";

import AsideBrasil from "./../AsideBrasil/index";
import ContentMundo from "./../ContentMundo/index";

const MainMundo = ({ saida }) => {
  return (
    <div className={styles.container}>
      <AsideBrasil />
      <ContentMundo saida={saida} />
    </div>
  );
};

export default MainMundo;
