import React, { useState } from 'react';
import Container from './components/Container';
import AddTodo from './components/AddTodo';
import AddLists from './components/AddLists';
import ColorSelector from './components/ColorSelector';

const App = () => {
  const [lists, setLists] = useState([]); //list초기화
  const [nextId, setNextId] = useState(1); //list key에 줄 값
  const [color, setColor] = useState(''); //todo list앱 색깔

  const onClick_check = (id) => {
    //완료항목 체크시 발생할 이벤트
    setLists(
      lists.map((list) =>
        list.id === id ? { ...list, checked: !list.checked } : list
      )
    );
  };

  const insertList = (text) => {
    //할 일 추가시 발생 이벤트
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
    //할 일 목록 제거시 발생 이벤트
    setLists(lists.filter((list) => list.id !== id));
  };

  const selectColor = (colorSelect) => {
    //색깔을 고를시 발생 이벤트
    setColor(colorSelect);
  };

  // const modify = (color) => {};
  // const onModify = (id, value) => {
  //   lists.map((list) => {
  //     if (list.id === id) {
  //       list.text = value;
  //     }
  //   });
  //   setLists(lists);
  // };

  return (
    <Container color={color}>
      <AddTodo insertList={insertList} />
      <AddLists
        lists={lists}
        onClick_check={onClick_check}
        onRemove={onRemove}
      />
      <ColorSelector selectColor={selectColor} />
    </Container>
  );
};

export default App;
