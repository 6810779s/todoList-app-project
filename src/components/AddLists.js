import React from 'react';
import styles from '../styles/AddLists.module.css';
import List from './List';

const AddLists = () => {
  return (
    <div className={styles.container}>
      <List />
      <List />
      <List />
    </div>
  );
};

export default AddLists;
