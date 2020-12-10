import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'semantic-ui-react'

export default function Header(props) {
  
  const headerStyle = {
    textAlign: "right",
    padding: "10px",
    backgroundColor: "#DDDDDD"
  }
  return(
    <nav style={headerStyle} className="header-navbar">
      <p className="header-text">
      {/* My Score: {props.score} | */}
      
      Total Songs: {props.music} | 
      Logged in as {props.email} | &nbsp;
        <button className="fake-link" onClick={props.logout}>(Log out)</button>| <Image className="profile-icon" circular src="https://react.semantic-ui.com/images/avatar/large/patrick.png"></Image>
      </p>

      {/* <p>Logged in as {props.email}.&nbsp;
        <span className="fake-link" onClick={props.logout}>(Log out)</span>
      </p> */}
    </nav>
  )
}
