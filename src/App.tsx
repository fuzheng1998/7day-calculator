/**
 * Renders a calculator app component.
 * @returns {JSX.Element} Calculator app component.
 */
import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState<string>("");

  const handleButtonClick = (value: string) => {
    setInput(input + value);
    // if value is percentage, divide by 100
    if (value === "%") {
      setInput((parseFloat(input) / 100).toString());
    }
    // if value is x^2, square the number
    if (value === "x^2") {
      setInput((parseFloat(input) * parseFloat(input)).toString());
    }
    // if value is +-, change the sign of the number
    if (value === "+-") {
      setInput((parseFloat(input) * -1).toString());
    }
    // if value is sqrt, square root the number
    if (value === "sqrt") {
      setInput(Math.sqrt(parseFloat(input)).toString());
    }
    // if value is 1/x, divide 1 by the number, 0 is not allowed
    if (value === "1/x") {
      if (parseFloat(input) === 0) {
        // alert user that 0 is not allowed
        alert("0 is not allowed");
        // clear the input
        setInput("");
      } else {
        setInput((1 / parseFloat(input)).toString());
      }
    }
  };

  // clear the last entry
  const clearEntry = () => {
    setInput(input.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="calculator dark">
        <div className="display">{input}</div>
        <div className="buttons">
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button className="operator" onClick={() => handleButtonClick("+")}>
            +
          </button>
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button className="operator" onClick={() => handleButtonClick("-")}>
            -
          </button>
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button className="operator" onClick={() => handleButtonClick("*")}>
            *
          </button>
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={() => handleButtonClick(".")}>.</button>
          <button className="equal" onClick={handleCalculate}>
            =
          </button>
          <button className="operator" onClick={() => handleButtonClick("/")}>
            /
          </button>
          <button className="clear" onClick={handleClear}>
            Clear
          </button>
          <button onClick={() => handleButtonClick("%")}>%</button>
          <button onClick={() => handleButtonClick("x^2")}>
            x<sup>2</sup>
          </button>
          <button onClick={() => handleButtonClick("+-")}>+/-</button>
          <button onClick={
            ()=> handleButtonClick("sqrt")
          }>
            sqrt<sup>x</sup>
          </button>
          <button
          onClick={() => handleButtonClick("1/x")}
          >
            1/x
          </button>
          <button onClick={()=>clearEntry()}>
            CE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
