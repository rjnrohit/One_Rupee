import React from "react";
import History from "./pages/history/History";
import Landing from "./pages/landing/js/landing";
import Profile from "./pages/profile/profile2";
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
    pages={props.pages}
    pic={props.pic}
    changePic={props.changePic}
    token={props.token}
        changeToken={props.changeToken}
    />
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
    <Route path ="/" exact component = {()=><Landing token={props.token} changeToken={props.changeToken}/>}/>
    <Route path ="/history" component={()=><History token={props.token} changeToken={props.changeToken}/>}/>
    <Route path ="/profile" component = {Profile2}/>
    <Route path ="/feed" component={() =><Feed token={props.token} changeToken={props.changeToken}/>}/>
    <Route path ="/request" component={()=><Request token={props.token} changeToken={props.changeToken}/>}/>
    <Route path ="/leaderboard"component = {()=><LeaderBoard token={props.token} changeToken={props.changeToken}/>}/>
    <Route path ="/registration" component = {()=><Registration token={props.token} changeToken={props.changeToken}/>}/>
      </div>
      </Switch>
    </Router>
  );
};

export default Main;
