import { TiArrowBackOutline } from "react-icons/ti";

import styles from "./styles.module.scss";
import { useContext } from "react";
import { DetalhesContext } from "./../../Providers/detalhes/index";

export default function Details() {
  const { data } = useContext(DetalhesContext);
  console.log(data);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerContent}>
          <div className={styles.btn}>
            <TiArrowBackOutline />
            <span>voltar</span>
          </div>

          <section className={styles.content}>
            <div className={styles.conteudo}>
              <div className={styles.titulo}>
                <img src="img" alt="img" />
                <div className={styles.blocoTexto}>
                  <h1>titulo</h1>
                  <div className={styles.bloco}>
                    <span className={styles.data}>data</span>

                    <span className={styles.fonte}>fonte da matéria</span>
                  </div>
                </div>
              </div>

              <div className={styles.description}>
                <p>ooo</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
