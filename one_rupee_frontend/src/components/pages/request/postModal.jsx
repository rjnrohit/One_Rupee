import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Modal,
  CardHeader,
  Avatar,
  CardContent
} from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
  paper: {
    flex: 1,
    position: "absolute",
    margin: "auto",
    width: 300,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
    padding: theme.spacing(1),
    outline: "none"
  },
  cardBody: {
    padding: "0 16px"
  }
}));

const PostModal = props => {
  const classes = useStyles();
  const post = props.post;
  const obtained = post.ngo.obtained;
  const required = post.ngo.required;
  const percentage = (obtained*100)/required;
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.open}
      onClose={props.onClose}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div className={classes.paper}>
        <CardHeader
          avatar={<Avatar src={post.type.image} />}
          title={post.ngo.title}
          subheader={post.ngo.category}
        />
        <CardContent style={{ paddingTop: 0 }}>
          <Typography variant="overline">
            {post.type.name}
          </Typography>
          <div style={{margin: "10px 10px"}}>
            <Typography component="p" variant="caption">
              {obtained}/{required} collected
            </Typography>
            <LinearProgress variant="determinate" value={percentage} />
          </div>
          <br></br>
          <Typography variant="body2" id="simple-modal-description">
            {post.ngo.description}
          </Typography>
        </CardContent>
      </div>
    </Modal>
  );
};

export default PostModal;
