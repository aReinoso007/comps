import Button from "./Button";
import { GoBell, GoInfinity, GoLog} from 'react-icons/go'
function App(){

    const handleClick=()=>{
        console.log('click bebe')
    }

    return(
        <div>
             <div>
                <Button onClick={handleClick} primary rounded outline>
                    <GoBell /> Hide Ads!
                </Button>
            </div>
            <div>
                <Button secondary>
                    <GoLog />
                    Buy now
                </Button>
            </div>
            <div>
                <Button success outline>
                    <GoInfinity />
                    Click me!
                </Button>
            </div>
            <div>
                <Button warning>See deal</Button>
            </div>
           
            <div>
                <Button danger>Something!</Button>
            </div>
        </div>
    )
}

export default App;