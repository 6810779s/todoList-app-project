import React, { useState } from 'react';
import Container from './components/Container';
import AddTodo from './components/AddTodo';
import AddLists from './components/AddLists';

const App = () => {
  const [lists, setLists] = useState([]);
  const [nextId, setNextId] = useState(1);

  const onClick_check = (id) => {
    setLists(
      lists.map((list) =>
        list.id === id ? { ...list, checked: !list.checked } : list
      )
    );
  };

  const insertList = (text) => {
    const list = {
      id: nextId,
      text,
      checked: false,
    };
    if (list.text === '') {
      list.text = 'please fill it in';
      //텍스트를 작성 안했을시 출력 문구
    }
    setLists((lists) => lists.concat(list));
    setNextId(nextId + 1);
  };

  const onRemove = (id) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  // const onModify = (id, value) => {
  //   lists.map((list) => {
  //     if (list.id === id) {
  //       list.text = value;
  //     }
  //   });
  //   setLists(lists);
  // };

  return (
    <Container>
      <AddTodo insertList={insertList} />
      <AddLists
        lists={lists}
        onClick_check={onClick_check}
        onRemove={onRemove}
      />
    </Container>
  );
};

export default App;
