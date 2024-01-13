import { useEffect, useState } from "react";

function useCounter({initialCount}){
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
    }   , [count]);

    const handleClick = () => { 
        setCount(count + 1);
    }

    return {
        count,
        handleClick,
    }
}
export default useCounter;;