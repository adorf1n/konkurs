import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const QuestionBlock__Page = () => {
  const localId = localStorage.getItem('userId');
  const navigate = useNavigate();
 
  useEffect(() => {
    if (localId === null) {
      navigate('/login');
    }
  }, []);

  return (
    <div><h1>успешно</h1></div>
  )
}

export default QuestionBlock__Page