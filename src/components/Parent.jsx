import React from 'react'
import { useSelector } from 'react-redux'
function Parent() {
    const counter = useSelector(state => state.counter.value)
    return <>
        <div className='mx-auto my-2 text-center bg-slate-300 w-1/2 p-5 rounded'>
            <h1 className='text-3xl font-bold'>
                App
            </h1>
            <h2 className='text-xl'>
               {counter}
            </h2>
    </div>
    
    </>
}

export default Parent