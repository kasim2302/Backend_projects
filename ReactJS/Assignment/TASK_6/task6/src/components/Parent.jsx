import React from "react";
import Child from "./Child";

const Parent = ({ users, onUserSelect }) => {
  const activeUsers = users.filter(user => user.id === 2);

  return <Child user={activeUsers[0]} onUserSelect={onUserSelect} />;
};

export default Parent;
