import React, { Component } from "react";
import Lisa from "./image/Lisa.jpg";
import ProfileData from "./ProfileData";

class Profile extends Component {
  render() {
    return (
      <div className="container">
        <h1>xxxxx</h1>
        <img
          src={Lisa}
          alt="lisa"
          className="img-thumbnail mb-3"
          style={{ width: "200px" }}
        />
        <ProfileData />
      </div>
    );
  }
}

export default Profile;
