import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

export default function Todo({ todo, onDelete, onUpdate }) {
  const { text, status } = todo;

  const handelOnChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };

  const handleOnClick = () => {
    onDelete(todo);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={status === "completed"}
        onChange={handelOnChange}
      />
      {text}
      <button onClick={handleOnClick}>
        <BsFillTrashFill />
      </button>
    </li>
  );
}
