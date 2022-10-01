import './form-component.scss'
//here ...otherprops is basically a spread of all the other properties like name . value etc
const FormInput = ({label,...otherProps}) => {
    return (
        <div className='group'>

        <input className='form-input'
        {...otherProps} />


        {label && (
            <label className={`${otherProps.value ? 'shrink' : ''} form-input-label`}>{label}</label>
            )
        }



        </div>

    )

}
//{label && } is nothing basically it tells that if label exist then only render the inside contents
// this `${otherProps.value ? 'shrink' : '' string interpolation is used to basically give an effect or shrink when we try typing something inside input field
export default FormInput;
