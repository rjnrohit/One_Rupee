import React, { Component } from "react";
import FeedPost from "./feedPost";

const samplePost = {
  ngo: {
    title: "[TITLE]",
    summary:
      "[short description]",
    category: "[category]",
    description:
      "[long description]",
    required: 10000, // amount of money required by project
    obtained: 3000, // amount of money obtained thus far
  },
  type: {
    name: "[name of ngo]",
    image: ""
  }
};

class Feed extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    // fetch
    this.setState({
      posts: [
        samplePost,
        samplePost,
        samplePost,
        samplePost,
        samplePost,
        samplePost,
        samplePost,
      ]
    });
  }

  render() {
    return (
      <div className="feed-container">
        {this.state.posts.map((post, index) => (
          <FeedPost post={post} key={index}/>
        ))}
      </div>
    );
  }
}

export default Feed;
