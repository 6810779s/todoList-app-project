import React from 'react';
import styles from '../styles/AddLists.module.css';
import List from './List';

let num = 0;
const AddLists = ({ lists, onClick_check, onRemove }) => {
  console.log('AddLists', num++);
  //리스트 클릭시 발생할 이벤트 함수들 App에서 부터 받아옴
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
