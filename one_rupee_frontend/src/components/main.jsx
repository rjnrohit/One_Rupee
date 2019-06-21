import React from "react";

const Main = props => {
  return (
    <div
      className={
        "main-wrapper" + (props.sidebarActive ? "" : " sidebar-hidden")
      }
    >
    </div>
  );
};

export default Main;
