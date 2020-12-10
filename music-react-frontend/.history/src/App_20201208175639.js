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
    console.log('Register is working', registerInfo);
    const url = process.env.REACT_APP_API_URL + '/music'

    try {
      const registerResponse = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(registerInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      console.log('registerResponse', registerResponse);
      const registerJson = await registerResponse.json()
      console.log('registerJson', registerJson)

      if(registerJson.status.code === 201) {
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
        <h1>Song Bird</h1>
        <NewUser
          register={this.register}
            />
        <MusicContainer />
        
    
      </div>
    );
  }
}
  


