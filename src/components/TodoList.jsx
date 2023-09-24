import { useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

export function TodoList() {
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

  return (
    <>
      <section>
        <ul>
          {todos.map((item) => (
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
