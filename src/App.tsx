import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Redux/cartSlice";
import { RootState } from "./Redux/store";

function App() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
