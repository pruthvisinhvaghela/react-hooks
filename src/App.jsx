import { useState, useMemo } from "react"; //use for increase performance
import "./App.css";

function App() {
  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(true);

  const getValue = () => {
    return setMyNum(myNum + 1);
  };

  const counterNum = (num) => {
    console.log("i am from counterNum  fun", num);
    for (let i = 0; i <= 500000; i++) {
      ``;
    }
    return num; //if we use useCallback then we can not return num
  };

  // const checkData = counterNum(myNum); //it print unnecessary value while on you clicked me button

  const checkData = useMemo(() => {
    return counterNum(myNum);
  }, [myNum]); //whenever we use useMemo then in console it not print unnecessary value

  return (
    <>
      <div className="container">
        <button onClick={getValue} style={{ background: "blue" }}>
          counter
        </button>
        <p>my num is : {checkData}</p>

        <button
          onClick={() => {
            setShow(!show);
          }}>
          {show ? "you clicked me" : "clicked me please"}
        </button>
      </div>
    </>
  );
}

export default App;
