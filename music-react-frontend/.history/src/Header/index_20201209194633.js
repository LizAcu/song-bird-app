import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header(props) {
  
  const headerStyle = {
    textAlign: "right",
    padding: "10px",
    backgroundColor: "#DDDDDD"
  }
  return(
    <nav style={headerStyle}>
      <p className="header-text">
      {/* My Score: {props.score} | */}
      Total Songs: {props.music} |
      Logged in as {props.username} | &nbsp;
        <button className="fake-link" onClick={props.logout}>(Log out)</button>
      </p>

      {/* <p>Logged in as {props.email}.&nbsp;
        <span className="fake-link" onClick={props.logout}>(Log out)</span>
      </p> */}
    </nav>
  )
}
