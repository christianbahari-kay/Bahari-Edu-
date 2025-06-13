import React, { useState } from "react";
import "../Styles/TeacherProfile.css";
import ProfileImg from "../Picture/Profile.jpg";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  
  const [profile, setProfile] = useState({
    name: "Kent Ito",
    teacherId: "TCH-27849",
    email: "kent.ito@school.edu",
    phone: "+6287364892008",
    gender: "Male",
    birthDate: "Tokyo, 18-Oct-1988",
    education: "Ph.D. in Biological Sciences, Master's in Physics",
    experience: "15 Years",
    awards: [
      "Certified Advanced Science Educator (2019)",
      `"Innovative Teaching Award" - National Science Board (2021)`,
    ],
  });

  // Handle input changes
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Handle award changes
  const handleAwardChange = (index, value) => {
    const updatedAwards = [...profile.awards];
    updatedAwards[index] = value;
    setProfile({ ...profile, awards: updatedAwards });
  };

  // Add a new award
  const addAward = () => {
    setProfile({ ...profile, awards: [...profile.awards, ""] });
  };

  // Remove an award
  const removeAward = (index) => {
    const updatedAwards = profile.awards.filter((_, i) => i !== index);
    setProfile({ ...profile, awards: updatedAwards });
  };

  // Toggle edit mode
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
            <p className="detail-label">Teacher ID</p>
            <p className="detail-value">{profile.teacherId}</p>

            <p className="detail-label">Email</p>
            {isEditing ? (
              <input type="email" name="email" value={profile.email} onChange={handleChange} className="input-field" />
            ) : (
              <p className="detail-value">{profile.email}</p>
            )}

            <p className="detail-label">Phone</p>
            {isEditing ? (
              <input type="phone" name="phone" value={profile.phone} onChange={handleChange} className="input-field" />
            ) : (
              <p className="detail-value">{profile.phone}</p>
            )}

            <p className="detail-label">Gender</p>
            {isEditing ? (
              <input type="gender" name="gender" value={profile.gender} onChange={handleChange} className="input-field" />
            ) : (
              <p className="detail-value">{profile.gender}</p>
            )}
          </div>

          <div className="detail-column">
            <p className="detail-label">Birth Place, Date</p>
            {isEditing ? (
              <input type="birthDate" name="birthDate" value={profile.birthDate} onChange={handleChange} className="input-field" />
            ) : (
              <p className="detail-value">{profile.birthDate}</p>
            )}

            <p className="detail-label">Education Qualification</p>
            {isEditing ? (
              <input type="education" name="education" value={profile.education} onChange={handleChange} className="input-field" />
            ) : (
              <p className="detail-value">{profile.education}</p>
            )}

            <p className="detail-label">Years of Experience</p>
            {isEditing ? (
              <input type="experience" name="experience" value={profile.experience} onChange={handleChange} className="input-field" />
            ) : (
              <p className="detail-value">{profile.experience}</p>
            )}

            <p className="detail-label">Certification & Awards</p>
            <ul className="detail-value">
              {profile.awards.map((award, index) => (
                <li key={index} className="award-item">
                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        value={award}
                        onChange={(e) => handleAwardChange(index, e.target.value)}
                        className="input-field"
                      />
                      <button className="btn small red" onClick={() => removeAward(index)}>Remove</button>
                    </>
                  ) : (
                    <span>{award}</span>
                  )}
                </li>
              ))}
              {isEditing && (
                <button className="btn small green" onClick={addAward}>+ Add Award</button>
              )}
            </ul>
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
