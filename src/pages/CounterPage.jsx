import Button from "../components/Button";
import useCounter from "../hooks/use-count";

function CounterPage({initialCount}){

    const {count, handleClick} = useCounter({initialCount});  

    return (
        <div>
            <h1>Count is {count}</h1>
            <Button onClick={handleClick}>Increment</Button>

        </div>
        
    )

}

export default CounterPage;