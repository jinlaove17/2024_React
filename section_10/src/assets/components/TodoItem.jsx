import "./TodoItem.css";

import { memo } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        type="checkbox"
        checked={isDone}
        onChange={onChangeCheckBox}
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// 고차 컴포넌트 (HOC)
// export default memo(TodoItem, (prevProps, curProps) => {
//   // 반환값에 따라 Props가 바뀌었는지 안바뀌었는지 판단
//   // true: Props가 바뀌지 않음 -> 리렌더링 X
//   // false: Props가 바뀜 -> 리렌더링 O
//   if (prevProps.id !== curProps.id) {
//     return false;
//   }

//   if (prevProps.isDone !== curProps.isDone) {
//     return false;
//   }

//   if (prevProps.content !== curProps.content) {
//     return false;
//   }

//   if (prevProps.date !== curProps.date) {
//     return false;
//   }

//   return true;
// });

export default memo(TodoItem);
