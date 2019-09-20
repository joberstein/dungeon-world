import React from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import logo from 'App/logo.svg';
import styles from 'App/styles.module.scss';

const App = () => (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>
          Sample starting page.
        </p>
        <a className={styles.link} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
);

export default withAuthenticator(App, true, null, null, null, {
    hiddenDefaults: ["phone_number", "email"]
});
