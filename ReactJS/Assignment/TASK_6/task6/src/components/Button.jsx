import PropTypes from "prop-types";

const Button = ({ label, variant, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: variant === "primary" ? "blue" : "gray",
        color: "white",
        padding: "8px 16px",
        border: "none",
      }}
    >
      {label}
    </button>

    
  );
};

Button.defaultProps = {
  variant: "primary",
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};

export default Button;
