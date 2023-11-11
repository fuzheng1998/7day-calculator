import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState<string>("");

  const handleButtonClick = (value: string) => {
    setInput(input + value);
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
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button className="operator" onClick={() => handleButtonClick('+')}>
          +
        </button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button className="operator" onClick={() => handleButtonClick('-')}>
          -
        </button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button className="operator" onClick={() => handleButtonClick('*')}>
          *
        </button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button className="equal" onClick={handleCalculate}>
          =
        </button>
        <button className="operator" onClick={() => handleButtonClick('/')}>
          /
        </button>
        <button className="clear" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
    </div>
  );
}

export default App;