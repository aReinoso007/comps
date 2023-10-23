import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

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
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={()=> handleOptionClick(option)} key={option.value}>{option.label}</div>
    });

    
    return (
       <div className="w-48 relative">
         <div className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full" onClick={handleClick}>
            { value?.label || 'Select a color'}
            {isOpen ? <GoChevronUp /> : <GoChevronDown />}
            </div>
         {isOpen && <div className="absolute top-full border rounded p-3 shadow bg-white w-full">{renderedItems}</div>}
       </div>
    );
}

export default Dropdown;