import React, {useState} from "react";
import "../Styles/UserProfile.css";
import ProfileImg from "../asset/Profile.jpg";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  const [profile, setProfile] = useState({
    name: "Tzuyu",
    studentId: "MHS-24556",
    email: "tzuyu1406@gmail.com",
    phone: "+6289483762509",
    gender: "Female",
    birthDate: "Tainan, 14-June-2008",
    class: "11th Grade",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img src={ProfileImg} alt="Profile" className="profile-img" />
          <div className="profile-info">
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="input-field name-input"
              />
            ) : (
              <h2 className="profile-name">{profile.name}</h2>
            )}
            <button className="btn blue" onClick={toggleEdit}>
              {isEditing ? "Save Changes" : "Edit Profile"}
            </button>
          </div>
        </div>

        <div className="profile-details">
          <div className="detail-column">
            <p className="detail-label">Student ID</p>
            <p className="detail-value">{profile.studentId}</p>

            <p className="detail-label">Email</p>
            {isEditing ? (
              <input type="email" name="email" value={profile.email} onChange={handleChange} className="input-field" />
            ) : (
              <p className="detail-value">{profile.email}</p>
            )}

            <p className="detail-label">Phone</p>
            {isEditing ? (
              <input type="text" name="phone" value={profile.phone} onChange={handleChange} className="input-field" />
            ) : (
              <p className="detail-value">{profile.phone}</p>
            )}
          </div>

          <div className="detail-column">
            <p className="detail-label">Gender</p>
            {isEditing ? (
              <input type="text" name="gender" value={profile.gender} onChange={handleChange} className="input-field" />
            ) : (
              <p className="detail-value">{profile.gender}</p>
            )}

            <p className="detail-label">Birth Place, Date</p>
            {isEditing ? (
              <input type="text" name="birthDate" value={profile.birthDate} onChange={handleChange} className="input-field" />
            ) : (
              <p className="detail-value">{profile.birthDate}</p>
            )}

            <p className="detail-label">Class</p>
            {isEditing ? (
              <input type="text" name="class" value={profile.class} onChange={handleChange} className="input-field" />
            ) : (
              <p className="detail-value">{profile.class}</p>
            )}
          </div>
        </div>

        <div className="profile-footer">
          <button className="btn gray">Change Password</button>
          <button className="btn red">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;