import Accordion from "./components/Accordion";
function App(){ 
    const items =[
        {
            id:1,
            label:'Can i use React?',
            content: 'You can use it You can use it You can use it You can use it'
        },
        {
            id: 2,
            label:'Can i use React?',
            content: 'You can use it You can use it You can use it You can use it'
        },
        {
            id: 3,
            label:'Can i use React?',
            content: 'You can use it You can use it You can use it You can use it'
        },
        {
            id:4,
            label:'Can i use React?',
            content: 'You can use it You can use it You can use it You can use it'
        },
        {
            id:5,
            label:'This wont render',
            content: ''
        },
    ]

     return <Accordion items={items}/>
}

export default App;