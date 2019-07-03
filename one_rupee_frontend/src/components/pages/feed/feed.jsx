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
      ],
      search:""
    });
  }
  UpdateChange = (event) =>
  {
    this.setState({search:event.target.value.substr(0,200)});
  }

  render() {
    let searched_posts = this.state.posts.filter(
      (post) =>
      {
        return ((post.ngo.title.toUpperCase().indexOf(this.state.search.toUpperCase()) !==-1 )||
                (post.ngo.summary.toUpperCase().indexOf(this.state.search.toUpperCase()) !==-1 )||       
                (post.ngo.category.toUpperCase().indexOf(this.state.search.toUpperCase()) !==-1 )||
                (post.ngo.description.toUpperCase().indexOf(this.state.search.toUpperCase()) !==-1 )||
                (post.type.name.toUpperCase().indexOf(this.state.search.toUpperCase()) !==-1 ))
      }
    )
    return (
      <div>
        <div style={{textAlign:"center",marginTop:"2%"}}>
            <input placeholder="Search here" id ="input" value = {this.state.search} onChange={this.UpdateChange.bind(this)}style={{textAlign:"center",height:"30px",width:"45%",fontSize:"24px",borderRadius:"5px",border:"1px solid black"}}/>
            {/* <button id="button" onClick={this.Search} style={{height:"30px",fontSize:"20px",margin:"0.5%",borderRadius:"5px",backgroundColor:"var(--sidebar-dark-color)",color:"white"}}>Search</button><br/>  */}
        </div>
        <Menu posts={searched_posts}/>
      </div>
    );
  }
}

export default Feed;
