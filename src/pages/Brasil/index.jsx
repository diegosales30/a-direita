import Main from "./../../components/Main/index";
import { format } from "date-fns";
import db from "../../services/firebaseConnection";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
const BrasilPage = () => {
  const [saida, setSaida] = useState();

  useEffect(() => {
    db.collection("noticias")
      .orderBy("created", "desc")
      .onSnapshot((doc) => {
        setSaida(
          doc.docs.map((snapshot) => ({
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
          }))
        );
      });
  }, []);
  return (
    <div className={styles.container}>
      <Main saida={saida} />
    </div>
  );
};
export default BrasilPage;
