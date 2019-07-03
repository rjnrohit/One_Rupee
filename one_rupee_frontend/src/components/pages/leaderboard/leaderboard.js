import React from "react"
import Table from "./table.js"
import Title from "./title.js"
function LeaderBoard()
{
    return(
        <div>
            <Title/>
            <div> 
               <h2 style = {{color: "blue",textAlign:"center"}} >Keep donating to climb up the  leaderboard...</h2> 
                <br/><br/>
            </div>
            <Table/>
        </div>

    )
}
export default LeaderBoard;