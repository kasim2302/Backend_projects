import React from "react";
import PropTypes from "prop-types";

const Child = ({ user, onUserSelect }) => {
  return (
    <div>
      <h4>{user.name}</h4>
      <p>{user.email}</p>
      <button onClick={() => onUserSelect(user)}>
        Select User
      </button>
    </div>
  );
};

Child.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  onUserSelect: PropTypes.func.isRequired,
};

export default Child;
