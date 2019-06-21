import React from "react";
import Donations from './pages/donations/Donations';

const Main = props => {
  return (
    <div
      className={
        "main-wrapper" + (props.sidebarActive ? "" : " sidebar-hidden")
      }
    >
    {props.page.name==="Donations" ? <Donations /> : null}
    </div>
  );
};

export default Main;
