import React from "react";
import History from "./pages/history/History";
import Landing from "./pages/landing/js/landing";
import Profile from "./pages/profile/profile";
import Feed from "./pages/feed/feed";
import Request from "./pages/request/request.js";
import LeaderBoard from "./pages/leaderboard/leaderboard.js";
import Registration from "./pages/registration/registration.js"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

const Main = props => {
  const Profile2 = () =>
{
  return(
    <Profile pageHandler={props.pageHandler}
    pages={props.pages}/>
  )
}

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
    <Route path ="/profile" component = {Profile2}/>
    <Route path ="/feed" component={Feed}/>
    <Route path ="/request" component={Request}/>
    <Route path ="/leaderboard"component = {LeaderBoard}/>
    <Route path ="/registration" component = {Registration}/>
      </div>
      </Switch>
    </Router>
  );
};

export default Main;
