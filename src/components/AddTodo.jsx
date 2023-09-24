import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { RiAddCircleFill } from "react-icons/ri";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length === 0) {
      return;
    }

    onAdd({ id: uuidv4(), text, status: "active" });
    setText("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="Add Todo"
        onChange={handleOnChange}
        value={text}
      />
      <button>
        <RiAddCircleFill />
      </button>
    </form>
  );
}
