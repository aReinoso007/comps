import { useState } from "react";
import Table from "./Table";

function SortableTable(props){

    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const {config, data } = props;


    const handleClick = (label) => {
        if(sortOrder === null){
            setSortOrder('asc');
            setSortBy(label)
        }else if(sortOrder === 'asc'){
            setSortOrder('desc');
            setSortBy(label)
        } else if (sortOrder === 'desc'){
            setSortOrder(null);
        }   
    }

    const updatedConfig = config.map((column) => {  
        if(!column.sortValue){
            return column;
        }
        return {
            ...column,
            header: () => <th onClick={()=> handleClick(column.label)}>{column.label} Is Sortable</th>
        }
    } );
    /**
     * Only sort data if sortOrder and sortBy are not null
     * if they are not null make a copy of the original data
     * and sort the copy
     * get the sortValue from the config
     */

    let sortedData = data;

    if (sortOrder && sortBy){
        const {sortValue } = config.find(column => column.label === sortBy);
        sortedData = [...data].sort((a,b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === 'desc' ? -1 : 1;

            if (typeof valueA === 'string'){
                return reverseOrder * valueA.localeCompare(valueB);
            }else{
                return (valueA - valueB)* reverseOrder;
            }
        });
    }

    return <div>
        <Table {...props} data={sortedData} config={updatedConfig}/>
    </div>

}
export default SortableTable;