import './button.styles.scss'


const BUTTON_TYPE_CLASSES = {
  google : 'google-sign-in',
  inverted : 'inverted'
}
const Button = ({children , buttontype , ...otherProps}) => {
  //here children is nothing but the tect we write inside button tag
  return(

    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttontype]}`}{...otherProps}>
    {children}</button>

  )

}
//`button-container ${BUTTON_TYPE_CLASSES[button-type]}`this is string interpolation
// allows basically pass a value dynamically
export default Button;
