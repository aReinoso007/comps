import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({to, children}){
    /*
    accessing navigation context
    */
    const {navigate} = useNavigation()

    const classes = classNames('text-blue-500 hover:underline')

    const handleClick = (event) =>{
        if(event.metaKey || event.ctrlKey){
            return;
        }
        event.preventDefault();
        navigate(to)
    }

    return <a className={classes} href={to} onClick={handleClick}>{children}</a>
}

export default Link;