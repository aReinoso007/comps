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