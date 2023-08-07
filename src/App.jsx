import Button from "./Button";
import { GoBell, GoInfinity, GoLog} from 'react-icons/go'
function App(){

    return(
        <div>
             <div>
                <Button 
                    primary 
                    rounded 
                    outline
                    className="mb-5"
                >
                    <GoBell/> 
                    Click me!!
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