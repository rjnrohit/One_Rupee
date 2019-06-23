import React, { Component } from "react";
import "./App.css";
import SideBar from "./components/sidebar/sidebar";
import TopBar from "./components/topbar/topbar";
import Main from "./components/main";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pages: [
        { name: "Profile", icon: "user" },
        { name: "Home", icon: "home" },
        { name: "Donations", icon: "money" },
        { name: "Leaderboard", icon: "trophy" },
        {name: "Landing", icon: "a"}
      ],
      activePage: 1,
      sidebarActive: true
    };
  }

  sidebarToggleHandler = () => {
    this.setState({ sidebarActive: !this.state.sidebarActive });
  };

  switchPage = page => {
    const newActive = this.state.pages.findIndex(pg => pg.name === page.name);
    this.setState({ activePage: newActive });
  };

  render() {
    return (
      <React.Fragment>
        <TopBar
          onSidebarToggle={this.sidebarToggleHandler}
          currentPage={this.state.pages[this.state.activePage]}
        />
        <SideBar
          pages={this.state.pages}
          activePage={this.state.activePage}
          pageHandler={this.switchPage}
          active={this.state.sidebarActive}
        />
        {/* Container for the main body */}
        <Main
          page={this.state.pages[this.state.activePage]}
          sidebarActive={this.state.sidebarActive}
        />
      </React.Fragment>
    );
  }
}

export default App;
