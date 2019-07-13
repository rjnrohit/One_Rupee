import React from "react";
import SidebarToggle from "../sidebar/sidebarToggle";

const TopBar = props => {
  if(props.token==="") return(
    <nav className="topbar-container">
    </nav>
  )
  return (
    <nav className="topbar-container">
      <SidebarToggle onSidebarToggle={props.onSidebarToggle} />
       <div className="page-title">Menu</div>
    </nav>
  );
};

export default TopBar;
