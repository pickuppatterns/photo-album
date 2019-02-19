import React from 'react';
import styles from './Header.css';

function Header() {
  console.log(styles);
  return (
    <header className={styles.header} >
      <h1>Animals with an Attitude</h1>
    </header> 
  );
}

export default Header;
