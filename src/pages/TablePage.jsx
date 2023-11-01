import Table from "../components/Table";

function TablePage(){

    const data =[
        {name:'Orange', color:'bg-orange-500', score: 5},
        {name:'Apple', color:'bg-red-500', score: 3},
        {name:'Banana', color:'bg-yellow-500', score: 1},
        {name:'Lime', color:'bg-green-500', score: 4},
        {name:'Grape', color:'bg-purple-500', score: 2},
    ]

    return (
        <div>
            <Table data={data}/>
        </div>
    )   
}

export default TablePage;