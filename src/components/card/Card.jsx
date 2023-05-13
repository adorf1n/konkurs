import { useState } from "react";
import styles from "./Card.module.css";

const Card = () => {
  let [response, setResponse] = useState("");

  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>question</h2>
      <input
        type="text"
        className={styles.input}
        value={response}
        onChange={(event) => setResponse(event.target.value)}
      />
    </div>
  );
};

export default Card;
