import React, { Component } from "react";
import "./App.css";
import SideBar from "./components/sidebar/sidebar";
import TopBar from "./components/topbar/topbar";
import Main from "./components/main";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
class App extends Component {
  constructor() {
    super();
    this.state = {
      pages: [
        { name: "Profile", icon: "user" ,route:"/profile"},
        { name: "Home", icon: "home" ,route:"/feed" },
        { name: "Request", icon:"money",route:"/request" },
        { name: "Leaderboard", icon: "trophy",route:"/leaderboard" },
        { name: "History", icon: "history",route:"/history" },
        { name: "Landing", icon: "",route:"/" },
        { name: "Registration",icon: "",route:"/registration"}
      ],
      activePage: 5,
      sidebarActive: true,
      profilePic: "https://docs.atlassian.com/aui/8.3.1/docs/images/avatar-person.svg"
    };
  }

  sidebarToggleHandler = () => {
    this.setState({ sidebarActive: !this.state.sidebarActive });
  };

  switchPage = page => {
    const newActive = this.state.pages.findIndex(pg => pg.name === page.name);
    this.setState({ activePage: newActive });
    console.log(this.state.pages[this.state.activePage].route)
  };

  changePic = path => {
    this.setState({profilePic: path})
  }

  render() {
    const Ab = () =>
    {
      return(
        <Main
        page={this.state.pages[this.state.activePage]}
        sidebarActive={this.state.sidebarActive}
        pageHandler={this.switchPage}
        pages= {this.state.pages}
        pic={this.state.profilePic}
        changePic={this.changePic}
      /> 
      )
    }
    // if(this.state.activePage===5) 
    // return (
    //   <Router><Switch>
    //    <Route path={this.state.activePage.route} exact component ={Ab}/>  
    //   </Switch></Router>
    // )
    // else
    return (
      <Router><Switch><React.Fragment>
      <TopBar
        onSidebarToggle={this.sidebarToggleHandler}
        active={this.state.sidebarActive}
        currentPage={this.state.pages[this.state.activePage]}
      />
      <SideBar
        pages={this.state.pages}
        activePage={this.state.activePage}
        pageHandler={this.switchPage}
        active={this.state.sidebarActive}
        profilePic = {this.state.profilePic}
      />
      {/* Container for the main body */}
      <Route path={this.state.activePage.route} exact component ={Ab}/>
      {/* <Main
        page={this.state.pages[this.state.activePage]}
        sidebarActive={this.state.sidebarActive}
      /> */}
    </React.Fragment></Switch></Router>

      
    );
  }
}

export default App;
