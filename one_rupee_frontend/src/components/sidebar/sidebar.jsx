import React from "react";
import {
  Grid, 
  Avatar, 
  Button, 
  makeStyles,
} from "@material-ui/core";
import SideBarItem from "./sidebarComponent";
import "./sidebar.css"
import axios from "axios"
import { BrowserRouter as Router,Link} from "react-router-dom"

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
});

function handleLogOut(props){
  console.log(props)
  axios.post("http://localhost:8000/logout/",{yrdh:""},{headers:{Authorization:"Token "+props.token}})
  .then(res =>{props.changeToken("")})
  .catch(err => {
    console.log(err);
    
  })
  props.pageHandler(props.pages[5])
  
  console.log(props)
}

const SideBar = props => {
  return (
    <Router>
    <React.Fragment>
      <div className={"sidebar-container" + (!props.active ? " hidden" : "")}>
        <div className="sidebar">
          <Grid container justify="center" alignItems="center">
            <Avatar 
              alt=""
              src={props.profilePic}
              className={useStyles().avatar}
            />
          </Grid>
          <div className="logout">
            <Link to = "/" style ={{textDecoration:"none"}}>
            <Button variant="contained" color="primary" size="small" onClick = {() => handleLogOut(props)}>
              Log Out
            </Button>
            </Link>
            
          </div>
          <br />
          {props.pages.map((page, index) => {
            if(props.isNgo)
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
            else
              if(index < 5 && index!==2)
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
