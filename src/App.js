import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

const App = props => {
  const [userState, setUserState] = useState({
    username : "johnciclus"
  });

  const usernameHandler = (event) => {
    // Don't do that this.state.persons[0].name = "John";
    setUserState({
      username: event.target.value
    })
  }



  return (
    <div className="App">
      <UserInput  username={userState.username} changed={usernameHandler}></UserInput>
      <UserOutput username={userState.username}></UserOutput>
      <UserOutput username={userState.username}></UserOutput>
    </div>
  )
}

export default App;
