import React from 'react';
import styles from '../styles/List.module.css';
import classNames from 'classnames/bind';

import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdCreate,
} from 'react-icons/md';

const cx = classNames.bind(styles);

const List = ({ list, onClick_check }) => {
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
        <div className={styles.remove}>
          <MdRemoveCircleOutline />
        </div>
        <div className={styles.modify}>
          <MdCreate />
        </div>
      </div>
    </div>
  );
};

export default List;
