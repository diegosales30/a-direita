import { BsFillReplyAllFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import db from "../../services/firebaseConnection";
export default function Details() {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    db.collection("brasil")
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
          titulo: snapshot.data().brasilnoticia.titulo,
          image1: snapshot.data().brasilnoticia.img1,
          image2: snapshot.data().brasilnoticia.img2,
          fonte: snapshot.data().brasilnoticia.copyright,
          descricao1: snapshot.data().brasilnoticia.desc1,
          descricao2: snapshot.data().brasilnoticia.desc2,
        };
        setData(data);
      });
  }, [id]);

  const navigate = useNavigate();

  const handleBack = (path) => {
    return navigate(path);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerContent}>
          <div className={styles.btn}>
            <button onClick={() => handleBack("/")} className={styles.btnBack}>
              <BsFillReplyAllFill />
            </button>
          </div>

          <section className={styles.content}>
            <div className={styles.conteudo}>
              <div className={styles.titulo}>
                <img src={data?.image1} alt="img" />
                <div className={styles.blocoTexto}>
                  <h1>{data?.titulo}</h1>
                  <div className={styles.bloco}>
                    <span className={styles.data}>{data?.createdFormat}</span>
                    <a
                      href={data?.fonte}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className={styles.fonte}>fonte da matéria</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.description}>
                <p>{data?.descricao1}</p>
              </div>

              <div className={styles.description2}>
                <img
                  src={data?.image2}
                  className={styles.img2}
                  style={
                    data?.image2 ? { display: "block" } : { display: "none" }
                  }
                  alt=""
                />
                <p>{data?.descricao2}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
