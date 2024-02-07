import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("green");
  //green we can change
  return (
    <>
      <div className="main-screen" style={{ backgroundColor: color }}>
        <div className="menubar">
          <div className="btn-menu">
            <button onClick={() => setColor("red")} id="red">
              Red
            </button>
            <button onClick={() => setColor("blue")} id="blue">
              Blue
            </button>
            <button onClick={() => setColor("Orange")} id="orange">
              Orange
            </button>
            <button
              onClick={() => setColor("rebeccapurple")}
              id="rebeccapurple">
              Purple
            </button>

            <button onClick={() => setColor("pink")} id="pink">
              Pink
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
