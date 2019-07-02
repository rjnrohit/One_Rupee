import React from "react";
import Main from "./main.js"

function Profile(props){
    return (
        <Main  pageHandler={props.pageHandler} pages={props.pages}/>
    );
  }

export default Profile;
