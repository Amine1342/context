import React from "react";
import ContentData from "./ContentData";

const ProfileData = (props) => {
  return (
    <div>
      <p>
        <a
          className="btn btn-primary"
          data-bs-toggle="collapse"
          href="#collapseExample"
        >
          Informations sur {props.welcome.Name}
        </a>
      </p>
      <ContentData userData={props.welcome} />
    </div>
  );
};

export default ProfileData;
