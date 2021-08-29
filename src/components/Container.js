import React from 'react';
import styles from '../styles/Container.module.css';

let num = 0;
const Container = ({ children, color }) => {
  console.log('Container', num++);
  //children: Container컴포넌트 태그사이 컴포넌트들을 출력하기 위한 요소
  //color: App에서 color요소 받아옴

  const style = {
    //color선택 시 적용할 style.
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
