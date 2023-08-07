import PropTypes from 'prop-types';

function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger, 
    outline, 
    rounded
}){

    Button.propTypes ={
        checkVariationValue: ({primary, 
            secondary, success, 
            warning, danger})=>{
            const count = 
                Number(!!primary)
                +Number(!!secondary)
                +Number(!!success)
                +Number(!!warning)
                +Number(!!danger)

            if(count > 1){
                return new Error('Only one of primary, secondary, success, warning or danger allowed')
            }
        }
    }


    return <button>{children}</button>

}

export default Button;