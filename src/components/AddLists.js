import React, { useState } from 'react';
import styles from '../styles/AddLists.module.css';
import List from './List';

const AddLists = () => {
  const [lists, setLists] = useState([
    { id: 1, text: '', checked: false },
    { id: 2, text: '', checked: true },
  ]);
  const [nextId, setNextId] = useState(2);
  return (
    <div className={styles.container}>
      {lists.map((list) => (
        <List list={list} key={list.id} />
      ))}
    </div>
  );
};

export default AddLists;
