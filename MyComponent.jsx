import { useState } from "react";


function MyComponent(){
    const [count, setCount] = useState(0);

    function increment(){
        setCount(count + 1);
        
    };
    function decrement(){
        setCount(count -1);
    }
    function reset(){
        setCount(count =0);
    }
    return(
        <div>
        <p>Count:{count}</p>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        
        </div>
    );
}
export default MyComponent