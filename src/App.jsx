import { useReducer } from "react";
import "./App.css";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

/*
step 1 we import useReducer
then we pass parameter reducer and initialState;
then we set  initialState as 0 
then in reducer func we pas two parameter current state and action 
then useReducer return count and dispatch // call reducer fun and return new state 
we use count for print num 
then we use dispatch so it will go to action and then check the value

*/

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>count = {count}</div>
      <button
        onClick={() => {
          dispatch("increment");
        }}>
        increment
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}>
        decrement
      </button>
    </>
  );
}

export default App;
