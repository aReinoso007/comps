import Button from "./Button";

function App(){

    return(
        <div>
             <div>
                <Button primary>Hide Ads!</Button>
            </div>
            <div>
                <Button secondary>Buy now</Button>
            </div>
            <div>
                <Button success outline>Click me!</Button>
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