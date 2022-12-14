import { format } from "date-fns";
import db from "../../services/firebaseConnection";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import MainMundo from "../../components/MainMundo";
const MundoPage = () => {
  const [saida, setSaida] = useState();

  useEffect(() => {
    db.collection("mundo")
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
            titulo: snapshot.data().mundonoticia.titulo,
            image1: snapshot.data().mundonoticia.img1,
            image2: snapshot.data().mundonoticia.img2,
            fonte: snapshot.data().mundonoticia.copyright,
            descricao1: snapshot.data().mundonoticia.desc1,
            descricao2: snapshot.data().mundonoticia.desc2,
          }))
        );
      });
  }, []);

  return (
    <div className={styles.container}>
      <MainMundo saida={saida} />
    </div>
  );
};
export default MundoPage;
