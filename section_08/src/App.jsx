import "./App.css";

import { useState, useRef } from "react";

import Editor from "./assets/components/Editor";
import Header from "./assets/components/Header";
import List from "./assets/components/List";

const dummyData = [
  {
    id: 0,
    isDone: false,
    content: "react 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todoList, setTodoList] = useState(dummyData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodoList([...todoList, newTodo]);
  };

  const onUpdate = (targetId) => {
    // todoList State의 값들 중에 targetId와 일치하는 id를 갖는 투두 아이템의 isDone을 변경

    setTodoList(
      todoList.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onDelete = (targetId) => {
    // targetId와 id가 일치하는 요소만 제외된 배열로 설정
    setTodoList(todoList.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List
        todoList={todoList}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    </div>
  );
}

export default App;
