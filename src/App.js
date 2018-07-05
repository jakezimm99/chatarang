import React, { Component } from 'react'



import './App.css'
import Main from './Main'
import SignIn from './SignIn'



class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn : true,
      user :{
        uid : 'SDK3203jd',
        displayName : 'Jake',
        email: 'zimmerjm@rose-hulman.edu'
      }
    }
  }

  render() {
    if(this.state.loggedIn) {
    return (
      <div className="App">
        <Main user = {this.state.user}/>
      </div>
    );
  }
  else {
    return (<SignIn user = {this.state.user}/>)
  }
}
}
export default App;
