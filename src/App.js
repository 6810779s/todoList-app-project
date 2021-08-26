import React from 'react';
import Container from './components/Container';
import AddTodo from './components/AddTodo';
import AddLists from './components/AddLists';

const App = () => {
  return (
    <Container>
      <AddTodo />
      <AddLists />
    </Container>
  );
};

export default App;
