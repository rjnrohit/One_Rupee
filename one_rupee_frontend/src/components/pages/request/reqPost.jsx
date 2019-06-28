import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Button,
  Avatar,
  Typography
} from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';
import PostModal from "./postModal";

const ReqPost = props => {
  const [open, setOpen] = React.useState(false);
  const post = props.post;
  const obtained = post.ngo.obtained;
  const required = post.ngo.required;
  const percentage = (obtained*100)/required;
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card style={{ margin: "10px 10px" }}>
      <CardHeader
        avatar={<Avatar src={post.type.image} />}
        title={post.ngo.title}
        subheader={post.ngo.category}
      />

      <CardContent style={{ padding: "0 16px" }}>
        <Typography variant="overline">
          {post.type.name}
        </Typography>
        <Typography component="p" variant="body2">
          {post.ngo.summary}
        </Typography>
        <div style={{margin: "10px 10px"}}>
        <Typography component="p" variant="caption">
          {obtained}/{required} collected
        </Typography>
          <LinearProgress variant="determinate" value={percentage} />
        </div>
      </CardContent>

      <CardActions>
        <Button size="small" color="primary" onClick={handleOpen}>
          See more
        </Button>
      </CardActions>

      <PostModal open={open} onClose={handleClose} post={post}/>
    </Card>
  );
};

export default ReqPost;
