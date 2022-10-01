import './button.styles.scss'


const BUTTON_TYPE_CLASSES = {
  google : 'google-sign-in',
  inverted : 'inverted'
}
const Button = ({children , buttontype , ...otherProps}) => {
  return(
    <div>
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttontype]}`}{...otherProps}>
    {children}</button>
    </div>
  )

}
//`button-container ${BUTTON_TYPE_CLASSES[button-type]}`this is string interpolation
export default Button;
