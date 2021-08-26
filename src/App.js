import React, { useCallback, useState } from 'react';
import Container from './components/Container';
import AddTodo from './components/AddTodo';
import AddLists from './components/AddLists';

const App = () => {
  const [lists, setLists] = useState([
    { id: 1, text: '할 일 1', checked: false },
    { id: 2, text: '할 일 2', checked: true },
  ]);

  const onClick_check = (id) => {
    setLists(
      lists.map((list) =>
        list.id === id ? { ...list, checked: !list.checked } : list
      )
    );
  };
  return (
    <Container>
      <AddTodo />
      <AddLists lists={lists} onClick_check={onClick_check} />
    </Container>
  );
};

export default App;
