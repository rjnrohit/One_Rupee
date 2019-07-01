import React from 'react';
import { 
    List,
    ListItem,
    ListItemText,
    MenuItem,
    Menu,
    makeStyles,
 } from '@material-ui/core';
import FeedPost from "./feedPost"

const useStyles = makeStyles(theme => ({
  root: {
    width: '30%',
    backgroundColor: theme.palette.primary,
    color: theme.palette.primary,
  },
}));

const options = [
  'SHOW ALL',
  'HEALTH',
  'EDUCATION',
  'CHARITY',
  'MISCELLANEOUS'
];

export default function SimpleListMenu(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  function handleClickListItem(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuItemClick(event, index) {
    setSelectedIndex(index);
    setAnchorEl(null);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
        <div className={classes.root}>
            <List component="nav" aria-label="categories">
                <ListItem
                button
                aria-haspopup="true"
                aria-label="category"
                onClick={handleClickListItem}
                >
                <ListItemText primary={selectedIndex ? options[selectedIndex]: "SHOWING ALL"} secondary="category" />
                </ListItem>
            </List>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
            {options.map((option, index) => (
                <MenuItem
                    key={option}
                    selected={index === selectedIndex}
                    onClick={event => handleMenuItemClick(event, index)}
                >
                {option}
                </MenuItem>
            ))}
            </Menu>
        </div>
        <div className="feed-container">
            {props.posts.map((post, index) => {
                return (selectedIndex===0 || post.ngo.category.toUpperCase()===options[selectedIndex].toUpperCase()) 
                ? (<FeedPost post={post} key={index}/>) 
                : null
            })}
        </div>
    </div>
  );
}