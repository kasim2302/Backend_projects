const Card = ({ children }) => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow space-y-4">
      {children}
    </div>
  );
};

export default Card;
