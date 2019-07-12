import React, { Component } from "react";
import Menu from "./Menu"
import axios from "axios";
// import axios from "axios"
const categories = [
    'AGE CARE',
    'AGRICULTURE',
    'ANIMAL WELFARE',
    'ART AND CRAFT',
    'CHILD EDUCATION',
    'CITIES/URBAN DEVELOPMENT',
    'COMMUNITY DEVELOPMENT',
    'CULTURE AND HERITAGE',
    'DISABILITY',
    'DISASTER MANAGEMENT',
    'DRINKING WATER',
    'EDUCATION',
    'ENVIRONMENTAL ISSUES',
    'HEALTH AND HYGIENE',
    'HIV/AIDS',
    'HOUSING AND SLUMS',
    'POPULATION',
    'POVERTY REMOVAL',
    'RURAL DEVELOPMENT',
    'SCIENCE AND TECHNOLOGY DEVELOPMENT',
    'TRIBAL PEOPLE',
    'WASTE MANAGEMENT',
    'WOMEN',
    'OTHERS'
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
  state={ 
    posts: []
  }

  componentDidMount() {
    console.log(this.props)
    axios.get("http://localhost:8000/cards/all-cards/",{
      headers:{Authorization:"Token "+this.props.location.state.tokens}
    }).then(res=>
      {
        console.log("success")
      }).catch(err=>
        {
          console.log(err.response.data)
        })

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
