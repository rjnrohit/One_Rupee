import React from "react";
import Header from "./header.js";
import Login from "./login.js";
import Footer from "./footer.js";

function Landing() {
  return (
    <div>
      <Header />
      <span>
        <Login />
        <Footer />
      </span>
    </div>
  );
}
export default Landing;
