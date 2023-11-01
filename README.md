## Components and pages

Whenever we have something reusable then it is a component, otheriwse a page, which still is a react component but not intended to be reused.

## Event handlers for custom component

If we create a custom component and we pass it down a list of props, it will eventually get too complex to keep adding eventHandlers. A way to solve this is through the `...` operator.

```javascript
    function Button({
        children, //to get the test passed down as input
        primary,
        secondary,
        success,
        warning,
        danger,
        outline,
        rounded,
        //to take the remaining props
        ...rest
    })

     return <button
                {...rest}
                className={classes}>
                {children}
            </button>
```

## Implementation with TypeScript

```javascript
import type { FunctionComponent } from "react";
import className from "classnames";

type ExcludeFromTuple<T extends any[], U> = {
  [K in keyof T]: T[K] extends U ? never : T[K];
}[number];

type Exclusive<T extends PropertyKey[], U = any> = T[number] extends infer E
  ? E extends string
    ? Record<E, U> & { [k in ExcludeFromTuple<T, E>]?: never }
    : never
  : never & {};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<{
    outline?: boolean;
    rounded?: boolean;
  }> &
  Exclusive<["primary", "secondary", "success", "warning", "danger"], boolean>;

const Button: FunctionComponent<ButtonProps> = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) => {
  const classes = className(
    rest.className,
    "flex items-center px-3 py-1.5 border",
    {
      "border-blue-500 bg-blue-500": primary,
      "border-gray-900 bg-gray-900": secondary,
      "border-green-500 bg-green-500": success,
      "border-yellow-400 bg-yellow-400": warning,
      "border-red-500 bg-red-500": danger,
      "rounded-full": rounded,
      "text-white":
        !outline && (primary || secondary || success || warning || danger),
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-500": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-500": outline && warning,
      "text-red-500": outline && danger,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
```

## Design process: Events + State Design Process

### What state + event handlers are there?

1. List out what an user will do and changed they will see while using the app.
2. Categorize each step as 'state' or 'event handler'.
3. Group common steps. Remove duplicates. Rewrite descriptions.

### What name and type?

4. Look at mockup. Remove or simplify parts that arent changing.
5. Replace remaining elements with text descriptions.
6. Repeat #4 and #5 with a different variation
7. Image you have to write a function that returns the text of what steps #5 and #6. In addition to your components props, what other arguments would you need?

### where's it defined?

8. Decide where each event handler + state will be defined

## Event handlers

This approach is not often seen on professional projects.
When we add handlers inside a mapping function this becomes harder to read
and understand.

```javascript
const renderedItems = items.map((item, index) => {
  const isExpanded = index === expandedIndex;

  const handleClick = () => {
    setExpandedIndex(index);
  };

  return (
    <div key={item.id}>
      <div onClick={handleClick}>{item.label}</div>
      {isExpanded && <div>{item.content}</div>}
    </div>
  );
});

return <div>{renderedItems}</div>;
```

So what do we do?
Take the event handler out of the mapping function and mix an arrow function
with the click handler like so:

```javascript
const handleClick = (nextIndex) => {
  setExpandedIndex(nextIndex);
};

const renderedItems = items.map((item, index) => {
  const isExpanded = index === expandedIndex;

  return (
    <div key={item.id}>
      <div onClick={() => handleClick(index)}>{item.label}</div>
      {isExpanded && <div>{item.content}</div>}
    </div>
  );
});

return <div>{renderedItems}</div>;
```

## Event capturing and bubling

Whenever a user clicks on an element, does any action, the browser looks for event handlers.
Its divided in 3 phases:

1. Capture phase - this one as developers we ignore it
   The browser looks at the element that was clicked on, then looks for the most parent element, then searches for event handlers, if it does then it calls them. Then goes to the 2nd most parent element and does the same, this repeats until the element that was triggered
2. Target phase
   The browser looks at the clicked element, and calls the event handler of the element that was clicked on
3. Buble phase
   It goes to the immeadiate parent and ask for event handlers and calls them, all the way up to the most parent.

```javascript
/*
  setting up event handlers
*/
  document.addEventListener('click', handleClick);
  /*
    Set up event handler for capture fase, the 3rd argument controls bubble vs capture
    false by default, 90% of the time we want it false
  */
 document.addEventListener('click', handleClick, true)
```
## useEffect
it allows us to run little snipets of code at various points in time, so we can use this to keep watching for event handlers
the first time we render the component

## `useRef()`
To have a reference to the component, so the way we use it is like this:
```javascript
  /*
  we create the reference
  */
  const divEl = useRef();

  /*
  we assign it to the element we want to keep track of
  */
  return (
       <div ref={divEl} className="w-48 relative">
        <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
        { value?.label || 'Select a color'}
            {isOpen ? <GoChevronUp className="text-lg"/> : <GoChevronDown className="text-lg"/>}
        </Panel>
         {isOpen && <Panel className="absolute top-full">{renderedItems}</Panel>}
       </div>
    );
```

## Navigatio libraries
1. React-Router
2. Wouter
3. React-Location
4. Reach-Router

## Modals
### Portals
This is usefull when dealing with modals, it posiitions the element outside the html tree so it can be position relative to the app container, thus avoiding bugs if a parent element has a given position.
```javascript
  function Modal(){

    return ReactDOM.createPortal(
      <div>Portal</div>

      document.querySelector('.modal-container')

    );

  }
```
The second element is a reference to an element in out index.html file, so we can create an element and give it an idenfifier class name such as   ```modal-container```

## Basic sorting in JS
The .sort function doesnt work well with numbers since it first transforms each element to string, so we need to pass a sorting function.
A and B are flipped, the way the comparison goes is like so:
`a = 1, b = 5`, so then `1-5` returns a negative value, so it 1 takes the position at 0 and 5 moves up one position to the right `[1, 5, 4, 3]`, it will keep on doing this untill all the numbers are sorted
  ```javascript
    const data = [5, 1, 4, 3];

    data.sort((a, b)=>{
      return a-b;
    })

  ```

  Getting numbers in descending order:
  ```javascript

  ```

  Sorting array of String:
  ```javascript
    const data = ['t','A', 'a', 'B','b']
    
    data.sort((a, b)=>{
      return a.localeCompare(b);
    })

  ```
Sorting array of objects:
```javascript
  const data = [
    {
      name: 'Tomato', cost: 10, weight: 5
    },
    {
      name: 'Carrot', cost: 4, weight: 2
    },
    {
      name: 'Potato', cost: 4, weight: 15
    },
    {
      name: 'Onion', cost: 5, weight: 15
    },
  ]

  function getSortValue(vegetable){
    return vegetable.cost;
  }

  const sortOrder = 'asc';
  

  data.sort((a, b)=>{
    const valueA = getSortValue(a);
    const valueB = getSortValue(b);

    const reverseOrder = sortOrder === 'asc' ? 1 : -1

    if( typeof valueA === 'string'){
      return valueA.localeCompare(valueB) * reverseOrder;
    }else{
      return (valueA - valueB) * reverseOrder;
    }

  })

```