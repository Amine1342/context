import React from "react";
import MyContext from "./MyContext";

const ContentData = () => {
  return (
    <MyContext.Consumer>
      {(data) => {
        return (
          <div className="collapse" id="collapseExample">
            <div className="card card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Nom : </strong> {data.Name}
                </li>
                <li className="list-group-item">
                  <strong>Age : </strong> {data.age}
                </li>
              </ul>
            </div>
          </div>
        );
      }}
    </MyContext.Consumer>
  );
};

export default ContentData;
