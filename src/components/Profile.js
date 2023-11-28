import React, { Component } from "react";
import Lisa from "./image/Lisa.jpg";
import ProfileData from "./ProfileData";
import MyContext from "./MyContext";

class Profile extends Component {
  render() {
    let value = this.context;

    return (
      <div className="container">
        <h1>{this.props.info.Name}</h1>
        <p>Age : {value.age}</p>
        <img
          src={Lisa}
          alt="lisa"
          className="img-thumbnail mb-3"
          style={{ width: "200px" }}
        />
        <ProfileData welcome={this.props.info} />
      </div>
    );
  }
}
Profile.contextType = MyContext;

export default Profile;
