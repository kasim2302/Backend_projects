import React, { useState } from "react";
import PropTypes from "prop-types";

const UserForm = ({ initialData, onSubmit, submitLabel }) => {
  const [name, setName] = useState(initialData.name);
  const [email, setEmail] = useState(initialData.email);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Name is required");
      return;
    }

    setError("");
    onSubmit({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
      />
      <br />

      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <br />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">{submitLabel}</button>
    </form>
  );
};

UserForm.defaultProps = {
  submitLabel: "Save",
};

UserForm.propTypes = {
  initialData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitLabel: PropTypes.string,
};

export default UserForm;
