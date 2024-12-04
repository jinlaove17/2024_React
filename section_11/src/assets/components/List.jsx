import "./List.css";

import { useState, useMemo, useContext } from "react";

import TodoItem from "./TodoItem";
import { TodoStateContext } from "../../App";

const List = () => {
  const todoList = useContext(TodoStateContext);
  const [searchTerm, setSearchTerm] = useState("");

  const onChangeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const getFilteredData = () => {
    if (searchTerm === "") {
      return todoList;
    }

    return todoList.filter((todo) =>
      todo.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredTodoList = getFilteredData();

  const getAnalyzedData = () => {
    console.log("getAnalyzedData 호출");

    const totalCount = todoList.length;
    const doneCount = todoList.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  };

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("useMemo 호출");

    const totalCount = todoList.length;
    const doneCount = todoList.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todoList]);

  // const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

  return (
    <div className="List">
      <h4>📝 To do List</h4>

      <div>total: {totalCount}</div>
      <div>doneCount: {doneCount}</div>
      <div>notDoneCount: {notDoneCount}</div>

      <input
        type="text"
        placeholder="검색어를 입력하세요..."
        value={searchTerm}
        onChange={onChangeSearchTerm}
      />
      <div className="item-wrapper">
        {filteredTodoList.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
