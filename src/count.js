import { useState } from "react";

const Counter  = ()=>{
    const [count, setcount] = useState(1) 

   const countHandler = ()=>{
    {setcount(count +1)}
   }

    return (
        <button onClick={countHandler}>
           
            Click me {count}
        </button>
    )

}

export default Counter