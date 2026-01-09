import "./ProfileCard.css";
import "./ProfileCard.css"
const ProfileCard = () => {
  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <div className="profile-img">
          <img
            src="https://i.pravatar.cc/150?img=3"
            alt="Developer Profile"
          />
        </div>

        <h2>Mohamed Kasim</h2>
        <h4>Full Stack Developer</h4>

        <p>
          Passionate developer building modern web applications using
          JavaScript, React, and NodeJs.
        </p>

        <div className="socials">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Email</a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
