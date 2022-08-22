import { useState } from "react"


export const useCounter = (initialValue = 1) => {

    const [counter, setCounter] = useState(initialValue)
    
    const increment = (value = 1) =>{
        setCounter(counter + value);
        
    }
    const decrement = (value = 1) =>{
        if(counter === 0) return
        setCounter(counter - value );
    }
    const reset = (event) =>{
        event.preventDefault;
        setCounter(initialValue );
    }

    return{

        counter,
        increment,
        decrement,
        reset,

    }

}
