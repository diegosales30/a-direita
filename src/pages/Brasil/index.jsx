import Main from "./../../components/Main/index";
import { format } from "date-fns";
import db from "../../services/firebaseConnection";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
const BrasilPage = () => {
  const [saida, setSaida] = useState();
  console.log(saida);

  useEffect(() => {
    db.collection("brasil")
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
            titulo: snapshot.data().brasilnoticia.titulo,
            image1: snapshot.data().brasilnoticia.img1,
            image2: snapshot.data().brasilnoticia.img2,
            fonte: snapshot.data().brasilnoticia.copyright,
            descricao1: snapshot.data().brasilnoticia.desc1,
            descricao2: snapshot.data().brasilnoticia.desc2,
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
