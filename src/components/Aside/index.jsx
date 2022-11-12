import styles from "./styles.module.scss";
import { useNavigate, generatePath } from "react-router-dom";

const Aside = ({ saida }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    const path = generatePath("/details/" + id);
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
