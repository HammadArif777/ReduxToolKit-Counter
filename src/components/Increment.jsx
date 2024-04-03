import { useDispatch, useSelector } from "react-redux"
import { increment } from "../store/counterSlice/counterSlice"

function Increment() {

    const counter = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
  return (
      <>
          <div className=' mx-auto w-1/2 rounded bg-indigo-700 text-white p-5 shadow'>
          <h1 className='text-2xl text-center w-full font-semibold'>
              Increment Component
      </h1>
              <h2 className='font-bold text-xl text-center'>
                  { counter}
            </h2>
              <button
                  onClick={()=> dispatch(increment())}
              className='bg-white p-2 text-indigo-700 rounded shadow font-semibold'
              >Increment</button>
          </div>
      </>
  )
}

export default Increment