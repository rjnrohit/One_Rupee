import React from "react";
import History from "./pages/history/History";
import Landing from "./pages/landing/js/landing";
import Profile from "./pages/profile/profile";
import Feed from "./pages/feed/feed";
import Request from "./pages/request/request.js"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
const Main = props => {
  return (
    <Router>
      <Switch>
        <div
        className={
          "main-wrapper" +
          (props.sidebarActive ? "" : " sidebar-hidden") 
        }
      >
    <Route path ="/" exact component = {Landing}/>
    <Route path ="/history" component={History}/>
    <Route path ="/profile" component = {Profile}/>
    <Route path ="/feed" component={Feed}/>
    <Route path ="/request" component={Request}/>
      </div>
      </Switch>
    </Router>
  );
};

export default Main;
