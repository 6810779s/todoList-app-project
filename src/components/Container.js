import React from 'react';
import styles from '../styles/Container.module.css';

const Container = ({ children, color }) => {
  const style = {
    background: `${color}`,
  };
  return (
    <div className={styles.container}>
      <div className={styles.title_container} style={style}>
        <h3>Planner</h3>
      </div>
      <div className={styles.add_todo}>{children}</div>
    </div>
  );
};

export default Container;
