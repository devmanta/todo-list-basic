import { useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import styles from "./TodoList.module.css";

export function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    { id: 1, text: "장보기", status: "active" },
    { id: 2, text: "운동하기", status: "active" },
  ]);

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleUpdate = (updated) => {
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  };
  const handleDelete = (deleted) => {
    setTodos(todos.filter((t) => t.id !== deleted.id));
  };

  const filteredTodos = getFilteredTodos(filter, todos);

  return (
    <>
      <section className={styles.container}>
        <ul className={styles.list}>
          {filteredTodos.map((item) => (
            <Todo
              key={item.id}
              todo={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      </section>
      <AddTodo onAdd={handleAdd} />
    </>
  );
}

function getFilteredTodos(filter, todos) {
  if (filter === "all") {
    return todos;
  }

  return todos.filter((t) => t.status === filter);
}
