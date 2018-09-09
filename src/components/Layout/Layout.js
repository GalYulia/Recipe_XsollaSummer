import React from 'react';

import styles from './styles.css';

const Layout = props => (
  <div>
    <header className={styles.header}><h1>Рецептульки</h1></header>
    <main>{props.children}</main>
    <footer className={styles.footer}>Xsolla Summer School 2018</footer>
  </div>
);

export default Layout;
