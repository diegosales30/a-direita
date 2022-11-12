import { useNavigate, generatePath } from "react-router-dom";
import styles from "./styles.module.scss";

const ContentBrasil = ({ saida }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    const path = generatePath("/details/" + id);
    return navigate(path);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>BRASIL</h1>

      <section className={styles.list}>
        <ul className={styles.containerBox}>
          {saida?.map((news) => (
            <li className={styles.boxContent} key={news.id}>
              <div className={styles.box1}>
                <img src={news.image1} alt="img" />
                <h1>{news.titulo}</h1>
              </div>
              <div className={styles.box2}>
                <span className={styles.span1}>{news.createdFormat}</span>
                <button onClick={() => handleClick(news.id)}>
                  <span className={styles.span2}>ler mais</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
// {
//   id: news?.id,
//   titulo: news?.titulo,
//   descricao: news.desc,
//   image: news.image,
//   created: news.created,
//   createdFormat: news.createdFormat,
// })

export default ContentBrasil;
