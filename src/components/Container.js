import React from 'react';
import styles from '../styles/Container.module.css';

const Container = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <h3>Planner</h3>
      </div>
      <div className={styles.add_todo}>{children}</div>
    </div>
  );
};

export default Container;
