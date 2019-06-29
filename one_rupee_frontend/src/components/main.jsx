import React from "react";
import History from "./pages/history/History";
import Landing from "./pages/landing/js/landing";
import Profile from "./pages/profile/profile";
import Feed from "./pages/feed/feed";
import Request from "./pages/request/request.js"

const Main = props => {
  return (
    <div
      className={
        "main-wrapper" +
        (props.sidebarActive ? "" : " sidebar-hidden") 
      }
    >
      {props.page.name === "History" ? <History /> : null}
      {props.page.name === "Landing" ? <Landing /> : null}
      {props.page.name === "Profile" ? <Profile /> : null}
      {props.page.name === "Home" ? <Feed /> : null}
      {props.page.name === "Request" ? <Request/> : null}
    </div>
  );
};

export default Main;
