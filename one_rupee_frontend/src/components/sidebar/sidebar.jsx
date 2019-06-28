import React from "react";
import {
  Grid, 
  Avatar, 
  Button, 
  makeStyles,
} from "@material-ui/core";
import SideBarItem from "./sidebarComponent";
import "./sidebar.css"

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
});

const SideBar = props => {
  return (
    <React.Fragment>
      <div className={"sidebar-container" + (!props.active ? " hidden" : "")}>
        <div className="sidebar">
          <Grid container justify="center" alignItems="center">
            <Avatar 
              alt="https://docs.atlassian.com/aui/8.3.1/docs/images/avatar-person.svg"
              src="https://docs.atlassian.com/aui/8.3.1/docs/images/avatar-person.svg"
              className={useStyles().avatar}
            />
          </Grid>
          <div className="logout">
            <Button variant="contained" color="primary" size="small">
              Log Out
            </Button>
          </div>
          <br />
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
