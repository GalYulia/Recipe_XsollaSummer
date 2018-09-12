import React from 'react';

import styles from './styles.css';

const Layout = props => (
  <div>
    <header className={styles.header}><h1>Рецепты</h1></header>
    <main>{props.children}</main>
  </div>
);

export default Layout;
