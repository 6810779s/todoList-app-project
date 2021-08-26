import React, { useState, useRef } from 'react';
import styles from '../styles/AddTodo.module.css';
import { MdAdd } from 'react-icons/md';
import AddLists from './AddLists';

const AddTodo = () => {
  const [text, setText] = useState('');
  const [lists, setLists] = useState([]);

  const submit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setText(e.target.value);
  };

  const input = useRef(null);
  return (

    <form className={styles.form} onSubmit={submit}>
      <input
        type="text"
        placeholder="create a new list"
        value={text}
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
