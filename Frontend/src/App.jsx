import "./App.css";
import { CreateTodo } from "./components/createTodo.jsx";
import { Todos } from "./components/todos.jsx";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
    .then((res) => res.json())
    .then((data) => {
      setTodos(data.todos);
    });

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
