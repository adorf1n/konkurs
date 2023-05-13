import styles from './SignUp.module.css';
import { React, useState } from 'react';

import { NavLink } from 'react-router-dom';
import { createUser } from '../../API/request';

const SignUp = () => {
  const [userData, setUserData] = useState({ login: '', password: '' });

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
          <button
            className={styles.btnSend}
            onClick={() => {
              createUser(userData);
            }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
