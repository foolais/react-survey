/* eslint-disable react/prop-types */
import "../styles/Button.module.css";

const Button = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};

export default Button;
