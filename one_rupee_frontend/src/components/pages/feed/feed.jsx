import React, { Component } from "react";
import Menu from "./Menu"
import axios from "axios";
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

const shortCategories = [
    "AGC" ,
    "AGR" ,
    "AW",
    "ANC" ,
    "CE" ,
    "CUD",
    "CD",
    "CNH" ,
    "D",
    "DM",
    "DW",
    "EDU",
    "ENVI",
    "HNH",
    "HA" ,
    "HS",
    "P",
    "PR",
    "RD",
    "STD",
    "TP",
    "WM",
    "W",
    "O"
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
    axios.interceptors.response.use(res=>{
      console.log(res.data.results)
      res.data.results.map(info=>{
        const idx = shortCategories.indexOf(info.category)
        const newPost = {
          ngo: {
            title: info.title,
            summary: info.shortDescription,
            category: categories[idx],
            description: info.longDescription,
            required: info.amount_requested,
            obtained: 0,
          },
          type: {
            name: info.ngo.ngo_name,
            image: ""
          }
        }
        this.setState(prevState=>({
          posts: [...prevState.posts, newPost]
        }))}
      )
      return res;
    })
    axios.get("http://localhost:8000/cards/all-cards/",{
      headers:{Authorization:"Token "+this.props.location.state.tokens}
    }).then(res=>
      {
        console.log("success")
      }).catch(err=>
        {
          console.log(err.response)
        })

    this.setState({
      posts: [
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
        </div>
        <Menu posts={searched_posts}/>
      </div>
    );
  }
}

export default Feed;
