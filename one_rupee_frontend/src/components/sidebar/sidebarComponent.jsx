import React from "react";
import {BrowserRouter as Router ,Link} from "react-router-dom";

const SideBarItem = props => {
  return (
    <Router>
    <Link to = {props.page.route} style ={{textDecoration:"none",color:"white"}}><div
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
