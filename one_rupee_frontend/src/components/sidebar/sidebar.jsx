import React from "react";
import {
  Grid, 
  Avatar, 
  Button, 
  makeStyles,
} from "@material-ui/core";
import SideBarItem from "./sidebarComponent";
import "./sidebar.css"
import { BrowserRouter as Router,Link} from "react-router-dom"

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
});

const SideBar = props => {
  return (
    <Router>
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
            <Link to = "/" style ={{textDecoration:"none"}}>
            <Button variant="contained" color="primary" size="small" onClick = {() => props.pageHandler(props.pages[5])}>
              Log Out
            </Button>
            </Link>
            
          </div>
          <br />
          {props.pages.map((page, index) => {
            if(index < 5)
            return (
              <SideBarItem
                key={index}
                page={page}
                active={props.activePage === index}
                changePage={props.pageHandler}
              />)
              else 
              return(null)
            ;
          })}
        </div>
      </div>
    </React.Fragment>
    </Router>
  );
};

export default SideBar;
