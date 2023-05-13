import React, { useEffect } from "react";
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

  return (
    <div>
      <div className={styles.container}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <div></div>
        <button className={styles.btn}>Отправить</button>
      </div>
    </div>
  );
};

export default QuestionBlock__Page;
