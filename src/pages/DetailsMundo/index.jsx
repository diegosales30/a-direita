import { BsFillReplyAllFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import db from "../../services/firebaseConnection";
export default function DetailsMundo() {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    db.collection("mundo")
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
          titulo: snapshot.data().mundonoticia.titulo,
          image1: snapshot.data().mundonoticia.img1,
          image2: snapshot.data().mundonoticia.img2,
          fonte: snapshot.data().mundonoticia.copyright,
          descricao1: snapshot.data().mundonoticia.desc1,
          descricao2: snapshot.data().mundonoticia.desc2,
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
            <button
              onClick={() => handleBack("/mundo")}
              className={styles.btnBack}
            >
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
