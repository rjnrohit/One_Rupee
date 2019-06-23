import React from "react";
import Donations from './pages/donations/Donations';
import Landing from "./pages/landing/js/landing";
const Main = props => {
  return (
    <div
      className={
        "main-wrapper" + (props.sidebarActive ? "" : " sidebar-hidden")
      }
    >
    {props.page.name==="Donations" ? <Donations /> : null}
    {props.page.name === "Landing" ? <Landing/> : null}
    </div>
  );
};

export default Main;
