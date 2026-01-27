import { useState } from "react";

const ImmutableObject = () => {
  const [user, setUser] = useState({
    name: "",
    age: ""
  });

  // ❌ WRONG: Direct mutation
  const updateNameWrong = () => {
    console.log("Before mutation:", user);

    user.name = "Kasim"; // ❌ mutating state
    setUser(user);       // same object reference

    console.log("After mutation:", user);
  };

  // ✅ CORRECT: Immutable update
  const updateNameCorrect = () => {
    console.log("Before immutable update:", user);

    setUser(prev => ({
      ...prev,
      name: "Kasim"
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Immutable Object Update
        </h2>

        <div className="mb-4 space-y-2">
          <p>
            <span className="font-semibold">Name:</span>{" "}
            {user.name || "—"}
          </p>
          <p>
            <span className="font-semibold">Age:</span>{" "}
            {user.age || "—"}
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={updateNameWrong}
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Update Name (Wrong – Mutation)
          </button>

          <button
            onClick={updateNameCorrect}
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Update Name (Correct – Immutable)
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImmutableObject;
