import React from "react";
import SideBarItem from "./sidebarComponent";

const SideBar = props => {
  return (
    <React.Fragment>
      <div className={"sidebar-container" + (!props.active ? " hidden" : "")}>
        <div className="sidebar">
          <img 
            alt="https://docs.atlassian.com/aui/8.3.1/docs/images/avatar-person.svg"
            src="https://docs.atlassian.com/aui/8.3.1/docs/images/avatar-person.svg"
            height="100" width="100"
          />
          {props.pages.map((page, index) => {
            return (
              <SideBarItem
                key={index}
                page={page}
                active={props.activePage === index}
                changePage={props.pageHandler}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideBar;
