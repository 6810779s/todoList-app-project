import React, { useState, useRef } from 'react';
import styles from '../styles/AddTodo.module.css';
import { MdAdd } from 'react-icons/md';

const AddTodo = ({ insertList }) => {
  const [value, setValue] = useState('');

  const submit = (e) => {
    e.preventDefault();
    insertList(value);
    setValue('');
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const input = useRef(null);
  return (
    <form className={styles.form} onSubmit={submit}>
      <input
        type="text"
        placeholder="create a new list"
        value={value}
        onChange={onChange}
        ref={input}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default AddTodo;
