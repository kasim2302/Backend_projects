import { useLocation } from "react-router-dom";
import Card from "../../components/Card";

const Profile = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const name = params.get("name");
  const age = params.get("age");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Card>
        <h2 className="text-xl font-bold">Profile</h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </Card>
    </div>
  );
};

export default Profile;
