import React from "react";
import Donations from "./pages/donations/Donations";
import Landing from "./pages/landing/js/landing";
import Profile from "./pages/profile/profile";
const Main = props => {
  return (
    <div
      className={
        "main-wrapper" +
        (props.sidebarActive ? "" : " sidebar-hidden") 
      }
    >
      {props.page.name === "Donations" ? <Donations /> : null}
      {props.page.name === "Landing" ? <Landing /> : null}
      {props.page.name === "Profile" ? <Profile /> : null}
    </div>
  );
};

export default Main;
