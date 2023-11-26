import React from "react";
import ContentData from "./ContentData";

const ProfileData = () => {
  return (
    <div>
      <p>
        <a
          className="btn btn-primary"
          data-toggle="collapse"
          href="#collapseExample"
        >
          Informations sur xxxxx ?
        </a>
      </p>

      <ContentData />
    </div>
  );
};

export default ProfileData;
