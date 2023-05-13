import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { increment,decrement } from "./features/counter/counter-slice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () =>{
    dispatch(decrement())

  }
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
        <button style={{marginRight:"5px"}} onClick={handleDecrement}> - </button>
        <button>count is {count}</button>
        <button style={{ marginLeft: "5px" }} onClick={handleIncrement}>
          +
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
