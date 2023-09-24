import logo from "./logo.svg";
import "./App.css";
import { TodoList } from "./components/TodoList";
import HeaderFilter from "./components/HeaderFilter";
import { useState } from "react";

const filters = ["all", "active", "completed"];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
      <HeaderFilter
        filters={filters}
        filter={filter}
        onFilterChange={setFilter}
      />
      <TodoList filter={filter} />
    </>
  );
}

export default App;
