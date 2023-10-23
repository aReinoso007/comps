import Accordion from "../components/Accordion";
function AccordionPage(){ 
    const items =[
        {
            id:1,
            label:'Can i use React?',
            content: 'You can use it You can use it You can use it You can use it this is the 1st paragraph for this accordion'
        },
        {
            id: 2,
            label:'Can i use React?',
            content: 'You can use it You can use it You can use it You can use it this is the 2nd paragraph for this accordion'
        },
        {
            id: 3,
            label:'Can i use React?',
            content: 'You can use it You can use it You can use it You can use it this is the 3rd paragraph for this accordion'
        },
        {
            id:4,
            label:'Can i use React?',
            content: 'You can use it You can use it You can use it You can use it'
        },
        {
            id:5,
            label:'This is the last one',
            content: 'qwrernnmnkdjkfkdjofo   lhn,ndfjkdjkf  sdsd  dsf rghedf'
        },
    ]

     return <Accordion items={items}/>
}

export default AccordionPage;