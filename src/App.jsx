import { useRef } from "react";

const App = () => {
  // Initializing a ref
  const inputRef = useRef(null);

  // Function to focus on the input element
  const focusInput = () => {
    // Accessing the current property of the ref to get the DOM node
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Hello, React!</h1>
      <input
        type="text"
        ref={inputRef} // Assigning the ref to the input element
        placeholder="Type something..."
      />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default App;
