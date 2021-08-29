import React, { useState } from 'react';
import styles from '../styles/AddTodo.module.css';
import { MdAdd } from 'react-icons/md';

let num = 0;
const AddTodo = ({ insertList }) => {
  console.log('AddTo', num++);
  //insertList함수를 App에서 받아옴
  const [value, setValue] = useState(''); //value값 초기화

  //플러스버튼 누르거나 엔터시, 할 일 추가 이벤트 발생
  const submit = (e) => {
    e.preventDefault();
    insertList(value);
    setValue('');
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  // const input = useRef(null);
  return (
    <form className={styles.form} onSubmit={submit}>
      <input
        type="text"
        placeholder="create a new list"
        value={value}
        onChange={onChange}
        // ref={input}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default AddTodo;
