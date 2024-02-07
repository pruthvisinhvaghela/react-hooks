import { useState } from "react";

import "./App.css";

function App() {
  const [todo, setTodo] = useState([]); //hold the list of todo
  const [input, setInput] = useState(""); //hold the value of the input field
  return (
    <>
      <div className="container">
        <h1>Todo List</h1>
        <div className="main-box">
          <form action="">
            <input type="text" placeholder=" enter your task" />
            <button>Add todo</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
