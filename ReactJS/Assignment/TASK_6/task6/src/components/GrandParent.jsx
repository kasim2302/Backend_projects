import React from "react";
import Parent from "./Parent";

const users = [
  { id: 1, name: "John", email: "john@gmail.com" },
  { id: 2, name: "David", email: "david@gmail.com" },
];

const GrandParent = () => {
  const onUserSelect = (user) => {
    console.log("Selected User:", user);
  };

  return (
    <Parent users={users} onUserSelect={onUserSelect} />
  );
};

export default GrandParent;
