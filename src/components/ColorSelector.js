import React, { useState } from 'react';
import styles from '../styles/ColorSelector.module.css';

const ColorSelector = ({ selectColor }) => {
  //색깔 적용될 함수
  return (
    <div>
      <ul>
        <li className={styles.red} onClick={() => selectColor('red')}>
          <div></div>
        </li>
        <li className={styles.orange} onClick={() => selectColor('orange')}>
          <div></div>
        </li>
        <li className={styles.yellow} onClick={() => selectColor('yellow')}>
          <div></div>
        </li>
        <li className={styles.green} onClick={() => selectColor('green')}>
          <div></div>
        </li>
        <li className={styles.blue} onClick={() => selectColor('blue')}>
          <div></div>
        </li>
        <li className={styles.deepBlue} onClick={() => selectColor('#130a8f')}>
          <div></div>
        </li>
        <li className={styles.purple} onClick={() => selectColor('purple')}>
          <div></div>
        </li>
        <li className={styles.pink} onClick={() => selectColor('pink')}>
          <div></div>
        </li>
        <li className={styles.aqua} onClick={() => selectColor('aqua')}>
          <div></div>
        </li>
        <li className={styles.mint} onClick={() => selectColor('#a3f5ce')}>
          <div></div>
        </li>
      </ul>
    </div>
  );
};

export default ColorSelector;
