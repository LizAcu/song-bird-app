import React, { Component } from 'react'
import Header from './Header'
import "./App.css";
import MusicContainer from "./MusicContainer"
import NewUser from './NewUser'
import AudioClipsContainer from './AudioClipsContainer'
import { Icon } from 'semantic-ui-react'


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
      const registerJson = await registerResponse.json() // SyntaxError: Unexpected end of JSON input at Object.App.register (App.js:36)
      console.log(registerJson)

      if(registerResponse.status === 201 || registerResponse.status === 200) {
        this.setState({
          loggedIn: true, 
          loggedInUser: registerJson.email
        })
      }
    } catch(err) {
      console.log('error trying to register', err)
    }
  }


  login = async (loginInfo) => {
    console.log('login() in App.js called with the following info',loginInfo)
    const url = process.env.REACT_APP_API_URL + "/user"

    try {
      const loginResponse = await fetch(url, {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(loginInfo),
        headers: {
          'Content-Type':'application/json'
        }
      })
      console.log("loginResponse", loginResponse); //logs upto here then catch error
      console.log(loginResponse.status)
      const loginJson = await loginResponse.json()
      console.log('loginJson', loginJson); //logs up to here when wrong pw & when not setting currentUser in backend
      if(loginResponse.status === 200) {
        this.setState({
          loggedIn: true, 
          loggedInUser: loginJson
        })
      }
      
    } catch (err) {
      console.log('freakin catch error', err)
    }
  }

  logout = async () => {
    console.log('attempting to log out')
    try {
      const url = process.env.REACT_APP_API_URL + '/music'

      const logoutResponse = await fetch(url, {
        credentials: 'include'
      })
      console.log('logoutResponse', logoutResponse)
      const logoutJson = await logoutResponse.json()
      console.log('logoutJson', logoutJson)

      if(logoutResponse.status === 200) {
        this.setState({
          loggedIn: false,
          loggedInUser: []
        })
      }

    } catch(err) {
      console.error('error logging out', err)
    }


  }

    render() {
    return (
      <div className="App">
        <h1 className="app-name"><h1 className="bird-icon"><Icon name="earlybirds" color="yellow"></Icon><Icon name="music"></Icon></h1>SongBird</h1>
        
        {
          this.state.loggedIn
          ?
          <React.Fragment>
            <Header as="h2"
            email={this.state.loggedInUser.email}
            logout={this.logout}
            />
            
          </React.Fragment>
        :
        <NewUser
          login={this.login}
          register={this.register}
            />
        }
        <MusicContainer />
        <AudioClipsContainer/>
        
        
    
      </div>
    );
  }
}
  


