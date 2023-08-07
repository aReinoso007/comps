## Event handlers for custom component
If we create a custom component and we pass it down a list of props, it will eventually get too complex to keep adding eventHandlers. A way to solve this is through the ```...``` operator.

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

     return <button {...rest} className={classes}>
                {children}
            </button>
```