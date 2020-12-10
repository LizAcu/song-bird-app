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
      <p>
      My Score: {props.score} |
      Total Posts: {props.allPosts} |
      Logged in as {props.email} | &nbsp;
        <span className="fake-link" onClick={props.logout}>(Log out)</span>
      </p>

      {/* <p>Logged in as {props.email}.&nbsp;
        <span className="fake-link" onClick={props.logout}>(Log out)</span>
      </p> */}
    </nav>
  )
}
