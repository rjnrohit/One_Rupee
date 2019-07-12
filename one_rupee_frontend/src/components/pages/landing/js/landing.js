import React from "react";
import Header from "./header.js";
import Login from "./login.js";
import Footer from "./footer.js";

function Landing(props) {
  return (
    <div>
      <Header />
      <span>
        <Login token={props.token} changeToken={props.changeToken}/>
        <Footer />
      </span>
    </div>
  );
}
export default Landing;
