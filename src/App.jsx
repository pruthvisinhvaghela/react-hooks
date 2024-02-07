import { useState } from "react";

import "./App.css";

function App() {
  const [todo, setTodo] = useState([]); //hold the list of todo
  const [input, setInput] = useState(""); //hold the value of the input field

  const change = (e) => {
    setInput(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    setTodo([...todo, input]);
    setInput("");
  };

  const remove = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };
  return (
    <>
      <div className="container">
        <h1>Todo List</h1>
        <div className="main-box">
          <form action="">
            <input
              type="text"
              placeholder=" enter your task"
              value={input}
              onChange={change}
            />
            <button onClick={submit}>Add todo</button>
          </form>

          <ul>
            {todo.map((td, index) => (
              <li key={td} className="input">
                {td}
                <button className="btn" onClick={() => remove(index)}>
                  delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
