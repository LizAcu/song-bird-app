import React, { Component } from 'react'
import "./App.css";
import MusicContainer from "./MusicContainer"
import NewUser from './NewUser'


export default class App extends Component {
  constructor() {
    super()

    this.state = {
      loggedIn: false, 
      loggedInUser: []
    }
  }

  register = async (registerInfo) => {
    console.log('Register is working', registerInfo); //logs info
    const url = process.env.REACT_APP_API_URL + "/new" //when set to /music it tries to read the musicdata instead of register

    try {
      const registerResponse = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(registerInfo),
        headers: {
          'Content-Type': 'application/json',

          //cors origin stuff
        }, 
        credentials: 'include'
        
        
      }) 

      console.log('registerResponse', registerResponse);
      console.log(registerResponse.status)
      // const registerJson = await registerResponse.json() // SyntaxError: Unexpected end of JSON input at Object.App.register (App.js:36)
    

      if(registerResponse.status === 201 || registerResponse.status === 200) {
        this.setState({
          loggedIn: true, 
          loggedInUser: registerJson.data.email
        })
      }
    } catch(err) {
      console.log('error trying to register', err)
    }
  }

    render() {
    return (
      <div className="App">
        <h1 className="app-name">SongBird</h1>
        <NewUser
          register={this.register}
            />
        <MusicContainer />
        
    
      </div>
    );
  }
}
  


