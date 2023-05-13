import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "./Main.module.css"

const QuestionBlock__Page = () => {
  const localId = localStorage.getItem('userId');
  const navigate = useNavigate();
 
  useEffect(() => {
    if (localId === null) {
      navigate('/login');
    }
  }, []);

  const logOut = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div><button className={styles.btnExit} onClick={logOut}>Выход</button></div>
  )
}

export default QuestionBlock__Page