import classNames from "classnames";
function Panel({className, children, ...rest}) {
    let finalClassNames = classNames('border rounded p-3 shadow bg-white w-full', className)
  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}   

export default Panel;