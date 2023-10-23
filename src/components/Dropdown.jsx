import { useState } from "react";

function Dropdown({options, value, onChange}){
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => { 
        setIsOpen((currentValue)=> !currentValue);
    }

    const handleOptionClick = (selected)=>{
        setIsOpen(false);
        onChange(selected);
    }

    const renderedItems = options.map((option)=>{
        return <div onClick={()=> handleOptionClick(option)} key={option.value} className="item">{option.label}</div>
    });

    
    return (
       <div>
         <div onClick={handleClick}>
            { value?.label || 'Select a color'}
            </div>
         {isOpen && <div>{renderedItems}</div>}
       </div>
    );
}

export default Dropdown;