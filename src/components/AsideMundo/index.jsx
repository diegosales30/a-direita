import styles from "./styles.module.scss";
import { useNavigate, generatePath } from "react-router-dom";

import { format } from "date-fns";
import db from "../../services/firebaseConnection";
import { useEffect, useState } from "react";

const Aside = () => {
  const [saida, setSaida] = useState();
  console.log(saida);
  const navigate = useNavigate();

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

  const handleClick = (id) => {
    const path = generatePath("/details-mundo/" + id);
    return navigate(path);
  };
  return (
    <div className={styles.container}>
      <h2>Mundo</h2>
      <section className={styles.content}>
        <ul>
          {saida?.map((br) => (
            <li key={br?.id} onClick={() => handleClick(br?.id)}>
              <img src={br?.image1} alt="" />
              <h5>{br?.titulo}</h5>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
export default Aside;
