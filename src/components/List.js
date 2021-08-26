import React from 'react';
import styles from '../styles/List.module.css';
import {
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
  MdCreate,
} from 'react-icons/md';

const List = () => {
  return (
    <div className={styles.items_container}>
      <div className={styles.checkbox}>
        <MdCheckBoxOutlineBlank />
        <div className={styles.text}>list</div>
      </div>
      <div className={styles.function}>
        <MdRemoveCircleOutline />
        <MdCreate />
      </div>
    </div>
  );
};

export default List;
