import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonMint = ({ children, icon = "", className, ...props }) => {
  const classes = "buttonMint " + className;

  if (icon)
    return (
      <button {...props} className={classes}>
        <FontAwesomeIcon icon={icon} />
        <p>{children}</p>
      </button>
    );

  return (
    <button {...props} className={classes}>
      <p>{children}</p>
    </button>
  );
};

export default ButtonMint;
