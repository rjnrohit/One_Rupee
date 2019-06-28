import React from "react"
import Popup from "./popup.js"
import "./request.css"
import ReqPost from "./reqPost"

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
    constructor()
    {
        super()
        this.state={
            showPopup:false,
            posts: [],
        };
    }

    componentDidMount() {
        // fetch
        this.setState({
          posts: [
            samplePost,
            samplePost,
            samplePost,
          ]
        });
    }

    togglePopup() 
    {
        this.setState({
          showPopup: !this.state.showPopup
        });
    }   
    render()
    {
        return(
            <div>
                <div className="feed-container">
                    {this.state.posts.map((post, index) => (
                    <ReqPost post={post} key={index}/>
                    ))}
                </div>
                <button  onClick={this.togglePopup.bind(this)}>
                    Request for Donation !
                </button>
                {this.state.showPopup ? <Popup closePopup = {this.togglePopup.bind(this)}/>:null}
            </div>
        )
    }
}
export default Request