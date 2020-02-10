import React from 'react';
import './App.css';
import Header from "../components/Header/Header";
import Profile from "./Profile";

class App extends React.Component {

  render() {
    return (
        <div>
          <Header />
          <Profile />
        </div>
    );
  }
}

export default App;
