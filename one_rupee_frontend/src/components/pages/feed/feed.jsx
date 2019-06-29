import React, { Component } from "react";
import Menu from "./Menu"

const categories = [
  "HEALTH",
  "EDUCATION",
  "CHARITY",
  "MISCELLANEOUS"
]

const samplePost = {
  ngo: {
    title: "[TITLE]",
    summary:
      "[short description]",
    category: categories[1],
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
      <div>
        <Menu posts={this.state.posts}/>
      </div>
    );
  }
}

export default Feed;
