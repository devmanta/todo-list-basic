import { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "장보기", status: "active" },
    { id: 2, text: "운동하기", status: "active" },
  ]);

  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </section>
  );
}
