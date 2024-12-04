import "./List.css";

import { useState } from "react";

import TodoItem from "./TodoItem";

const List = ({ todoList, onUpdate, onDelete }) => {
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

  return (
    <div className="List">
      <h4>📝 To do List</h4>
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
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
