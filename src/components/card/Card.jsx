import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>question</h2>
      <input type="text" className={styles.input} />
    </div>
  );
};

export default Card;
