import React from "react";
import {BrowserRouter as Router ,Link} from "react-router-dom"
const sidebarItem = {
  padding: "20px 25px 20px 12px",
  transition: "all 0.4s",
  webkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  cursor : "pointer"
}
const SideBarItem = props => {
  return (
    <Router>
    <Link to = {props.page.route} style ={sidebarItem}><div
      className={"sidebar-item" + (props.active ? " active" : "")}
      onClick={() => props.changePage(props.page)}
    >
      <i className={`fa fa-${props.page.icon}`} />
      <span>{props.page.name}</span>
    </div>
    </Link>
    </Router>
  );
};


export default SideBarItem;
