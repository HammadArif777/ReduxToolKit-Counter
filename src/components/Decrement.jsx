import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../store/counterSlice/counterSlice";

function Decrement() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className="my-2 mx-auto w-1/2 rounded bg-rose-700 text-white p-5 shadow">
        <h1 className="text-2xl text-center w-full font-semibold">
          Decrement Component
        </h1>
        <h2 className="text-xl text-center">{counter}</h2>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-white p-2 text-rose-700 rounded shadow font-semibold"
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default Decrement;
