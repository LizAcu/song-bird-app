import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Image } from 'semantic-ui-react'

export default function Header(props) {
    const HeaderAttempt = () => {
            <Header as="h2">
                <Image circular src="https://react.semantic-ui.com/images/avatar/large/patrick.png">Hello, {props.email}</Image>
            </Header>
    }


  
//   const headerStyle = {
    // textAlign: "right",
    // padding: "10px",
    // backgroundColor: "#DDDDDD"
//   }
//   return(
    // <nav style={headerStyle} className="header-navbar">
      {/* <p className="header-text"> */}
    //   My Score: {props.score} |
      {/* Total Songs: {props.music} | */}
      {/* Logged in as {props.email} | &nbsp; */}
        {/* <button className="fake-link" onClick={props.logout}>(Log out)</button> */}
      {/* </p> */}

      {/* <p>Logged in as {props.email}.&nbsp;
        <span className="fake-link" onClick={props.logout}>(Log out)</span>
      </p> */}
    // </nav>
//   )
}
