import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";
import styles from "../questionBlock__Page/QuestionBlock.module.css";

const QuestionBlock__Page = () => {
  const localId = localStorage.getItem("userId");
  const navigate = useNavigate();

  useEffect(() => {
    if (localId === null) {
      navigate("/login");
    }
  }, []);

  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  let [response, setResponse] = useState("");
  let [response2, setResponse2] = useState("");
  let [response3, setResponse3] = useState("");
  let [response4, setResponse4] = useState("");
  let [response5, setResponse5] = useState("");
  let [response6, setResponse6] = useState("");
  let [response7, setResponse7] = useState("");
  let [response8, setResponse8] = useState("");
  let [response9, setResponse9] = useState("");

  const submit = () => {
    if (
      response &&
      response2 &&
      response3 &&
      response4 &&
      response5 &&
      response6 &&
      response7 &&
      response8 &&
      response9 != ""
    ) {
      console.log(response);
      console.log(response2);
      console.log(response3);
      console.log(response4);
      console.log(response5);
      console.log(response6);
      console.log(response7);
      console.log(response8);
      console.log(response9);
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>question</h2>
          <input
            type="text"
            className={styles.input}
            value={response}
            onChange={(event) => setResponse(event.target.value)}
          />
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>question</h2>
          <input
            type="text"
            className={styles.input}
            value={response2}
            onChange={(event) => setResponse2(event.target.value)}
          />
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>question</h2>
          <input
            type="text"
            className={styles.input}
            value={response3}
            onChange={(event) => setResponse3(event.target.value)}
          />
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>question</h2>
          <input
            type="text"
            className={styles.input}
            value={response4}
            onChange={(event) => setResponse4(event.target.value)}
          />
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>question</h2>
          <input
            type="text"
            className={styles.input}
            value={response5}
            onChange={(event) => setResponse5(event.target.value)}
          />
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>question</h2>
          <input
            type="text"
            className={styles.input}
            value={response6}
            onChange={(event) => setResponse6(event.target.value)}
          />
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>question</h2>
          <input
            type="text"
            className={styles.input}
            value={response7}
            onChange={(event) => setResponse7(event.target.value)}
          />
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>question</h2>
          <input
            type="text"
            className={styles.input}
            value={response8}
            onChange={(event) => setResponse8(event.target.value)}
          />
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>question</h2>
          <input
            type="text"
            className={styles.input}
            value={response9}
            onChange={(event) => setResponse9(event.target.value)}
          />
        </div>
      </div>
      <button className={styles.btn} onClick={() => submit()}>
        Отправить
      </button>
    </div>
  );
};

export default QuestionBlock__Page;
