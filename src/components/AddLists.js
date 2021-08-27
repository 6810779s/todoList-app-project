import React from 'react';
import styles from '../styles/AddLists.module.css';
import List from './List';

const AddLists = ({ lists, onClick_check, onRemove }) => {
  return (
    <div className={styles.container}>
      {lists.map((list) => (
        <List
          list={list}
          key={list.id}
          onClick_check={onClick_check}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default AddLists;
