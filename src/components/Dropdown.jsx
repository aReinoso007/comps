import { useState } from "react";

function Dropdown({options, selection, onSelect}){
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => { 
        setIsOpen((currentValue)=> !currentValue);
    }

    const handleOptionClick = (selected)=>{
        setIsOpen(false);
        onSelect(selected);
    }

    const renderedItems = options.map((option)=>{
        return <div onClick={()=> handleOptionClick(option)} key={option.value} className="item">{option.label}</div>
    });

    
    return (
       <div>
         <div onClick={handleClick}>
            { selection?.label || 'Select a color'}
            </div>
         {isOpen && <div>{renderedItems}</div>}
       </div>
    );
}

export default Dropdown;