import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import MyContext from "./components/MyContext";
import "./App.css";

class App extends React.Component {
  state = {
    user: {
      Name: "Lisa",
      age: 8,
    },
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <MyContext.Provider value={this.state.user}>
          <Profile info={this.state.user} />
        </MyContext.Provider>
      </div>
    );
  }
}

export default App;
