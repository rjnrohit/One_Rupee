import React from "react"
import Popup from "./popup.js"
import ReqPost from "./reqPost"
import axios from "axios"

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
      category: "[category]",
      description:
        "[long description]",
      required: 1000, // amount of money required by project
      obtained: 0, // amount of money obtained thus far
    },
    type: {
      name: "[name of ngo]",
      image: ""
    }
};

class Request extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            posts: [],
            username:"",
            token:this.props.token,
            pk:this.props.pk,
        };
    }

    componentDidMount() {
        // fetch
        const url = "http://localhost:8000/ngo/view-profile/" + this.props.pk + "/"
    axios({url:url,
      headers:{Authorization:"Token "+this.props.token}
    }).then(res=>{
      this.setState({username:res.data.Ngo.username})
      const url2="http://localhost:8000/cards/card-list-view/"+this.state.username +"/"
      axios({url:url2,
      headers:{Authorization:"Token "+this.state.token},
      method:"get",
      transformResponse:[res=>{
        // console.log(res)
        res=JSON.parse(res)
        res.results.map(info=>{
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
      }]
    }).then(res=>
      {
        console.log("success")
      }).catch(err=>
        {
          console.log(err)
        })
    }).catch(err=>{
      console.log(err)
    })
        this.setState({
          posts: []
        });
    }

    render()
    {
        return(
            <div>
                <div><h1 style={{textAlign:"center"}}>My Requests</h1></div>
                <div className="feed-container">
                    {this.state.posts.map((post, index) => (
                    <ReqPost post={post} key={index}/>
                    ))}
                </div>
                <div id="req">
                     <Popup token={this.props.token} pk={this.props.pk} changePk={this.props.changePk}/>
                </div>
            </div>
        )
    }
}
export default Request