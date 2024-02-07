import { useState } from "react";

import "./App.css";

function App() {
  const [todo, setTodo] = useState([]); //hold the list of todo
  const [input, setInput] = useState(""); //hold the value of the input field
  return (
    <>
      <div>
        <h1>Todo List</h1>
        <input type="text" placeholder=" enter your task" />
      </div>
    </>
  );
}

export default App;
