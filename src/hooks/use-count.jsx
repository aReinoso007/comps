import { useEffect, useState } from "react";

function useCounter({initialCount}){
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
    }   , [count]);

    const increment = () => { 
        setCount(count + 1);
    }

    return {
        count,
        increment,
    }
}
export default useCounter;;