/* eslint-disable no-console */
import styles from './LogIn.module.scss';
import { React, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { loginUser } from '../../API/request';


const LogIn = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ id: '', login: '', password: '' });

  const loginHandlerChange = (event) => {
    setUserData((prev) => {
      return {
        ...prev,
        login: event.target.value,
      };
    });
  };

  const passwordHandlerChange = (event) => {
    setUserData((prev) => {
      return {
        ...prev,
        password: event.target.value,
      };
    });
  };

  const checkUser = async () => {
    const compareUser = await loginUser(userData);

    if (compareUser) {
      localStorage.setItem('userId', JSON.stringify(compareUser.id));
      navigate('/questionsblock');
    } else {
      alert('Неверные данные для входа!');
    }
  };

  return (
    <div className={styles.logIn}>
      <div className={styles.logInMain}>
        <div className={styles.logInNav}>
          <NavLink to="/login" className={styles.logInLink}>
            Log In
          </NavLink>
          <NavLink to="/signup" className={styles.signInLink}>
            Sign Up
          </NavLink>
        </div>
        <form className={styles.logInForm}>
          <div className={styles.usernameWrap}>
            <h2 className={styles.usernameTitle}>Username</h2>
            <input
              required
              type="text"
              placeholder="Login"
              className={styles.usernameInput}
              value={userData.login}
              onChange={loginHandlerChange}
            />
          </div>
          <div className={styles.passwordWrap}>
            <h2 className={styles.passwordTitle}>Password</h2>
            <input
              required
              type="password"
              placeholder="Password"
              className={styles.passwordInput}
              value={userData.password}
              onChange={passwordHandlerChange}
            />
          </div>
          
          <button type="button" className={styles.btnSend} onClick={checkUser}>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
