import React from "react"
import Popup from "./popup.js"
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
                     <Popup />
                </div>
            </div>
        )
    }
}
export default Request