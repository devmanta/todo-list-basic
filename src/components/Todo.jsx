import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import styles from "./Todo.module.css";

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
    <li className={styles.todo}>
      <input
        type="checkbox"
        checked={status === "completed"}
        onChange={handelOnChange}
        id={todo.id}
        className={styles.checkbox}
      />
      <label className={styles.text} htmlFor={todo.id}>
        {text}
      </label>
      <span className={styles.icon}>
        <button onClick={handleOnClick} className={styles.button}>
          <BsFillTrashFill />
        </button>
      </span>
    </li>
  );
}
