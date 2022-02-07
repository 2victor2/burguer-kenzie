import "./styles.css"

const Button = ({ children, callback, classname }) => (
  <button
    onClick={(e) => {
      e.preventDefault();
      callback();
    }}
    className={classname}
  >
    {children}
  </button>
);

export default Button