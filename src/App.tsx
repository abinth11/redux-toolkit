import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useState, ChangeEvent } from "react";
import {
  increment,
  decrement,
  addCount,
} from "./features/counter/counter-slice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState<number>(0);
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    const parsedInput = input.trim() !== '' ? Number(input) : 0;
    setInputValue(parsedInput);
  };
  
  const handleAdd = () => {
    dispatch(addCount(inputValue));
  };

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button style={{ marginRight: "5px" }} onClick={handleDecrement}>
          {" "}
          -{" "}
        </button>
        <button>count is {count}</button>
        <button style={{ marginLeft: "5px" }} onClick={handleIncrement}>
          +
        </button>        
      </div>
      <div>
      <input className="count-input" type='number' value={inputValue===0?'':inputValue} onChange={handleChange} />
        <button onClick={handleAdd}>add</button>
      </div>
    </>
  );    
}

export default App;
