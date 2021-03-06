import React from 'react';
import styles from '../styles/List.module.css';
import classNames from 'classnames/bind';

import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';

const cx = classNames.bind(styles);

let num = 0;
const List = ({ list, onClick_check, onRemove }) => {
  console.log('List', num++);
  //리스트 안에 있는 요소들 받아오기
  const { text, checked, id } = list;

  return (
    <div className={styles.items_container}>
      <div
        className={cx('checkbox', { checked })}
        onClick={() => onClick_check(id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className={styles.text}>{text}</div>
      </div>
      <div className={styles.function}>
        <div className={styles.remove} onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
        {/* <div className={styles.modify} onClick={() => onModify(id, text)}>
          <MdCreate />
        </div> */}
      </div>
    </div>
  );
};

export default React.memo(List);
