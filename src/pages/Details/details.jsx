import { TiArrowBackOutline } from "react-icons/ti";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import styles from "./styles.module.scss";

import { useParams } from "react-router-dom";
import db from "../../services/firebaseConnection";
export default function Details() {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    db.collection("noticias")
      .doc(id)
      .get()
      .then((snapshot) => {
        const data = {
          id: snapshot.id,
          created: snapshot.data().created,
          createdFormat: format(
            snapshot.data().created.toDate(),
            "dd MMMM yyyy"
          ),
          titulo: snapshot.data().noticia.titulo,
          image: snapshot.data().noticia.img,
          fonte: snapshot.data().noticia.ft,
          descricao: snapshot.data().noticia.desc,
        };
        setData(data);
      });
  }, [id]);

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
                <img src={data?.image} alt="img" />
                <div className={styles.blocoTexto}>
                  <h1>{data?.titulo}</h1>
                  <div className={styles.bloco}>
                    <span className={styles.data}>{data?.createdFormat}</span>

                    <span className={styles.fonte}>fonte da matéria</span>
                  </div>
                </div>
              </div>

              <div className={styles.description}>
                <p>{data?.descricao}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
