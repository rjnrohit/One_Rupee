import React from "react"
import "../history/Table.css"
import "../history/History.css"

class Table extends React.Component
{
    constructor()
    {
        super()
        this.state={
            leaders:[{rank:1,name:"name1",donations:"1000"},
                     {rank:2,name:"name2",donations:"500"},
                     {rank:3,name:"name3",donations:"250"},
                     {rank:4,name:"name4",donations:"100"},
                     {rank:5,name:"name5",donations:"50"}],
            myStatus:[{rank:23,name:"myName",donations:"12"}]         
        }
    }
    render()
    {
        return(
            <div className="paymentHistory">
                <table id ="payment">
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Amount Donated</th>
                    </tr>
                    {this.state.leaders.map((leader) =>
                        {
                        return(
                            <tr>
                                <td>{leader.rank}</td>
                                <td>{leader.name}</td>
                                <td> &#8377; {leader.donations}</td>
                            </tr>
                        ) ;
                        })}

                </table>
                <br/><br/>
                <div><h2 style={{textAlign:"center"}}>My Rank</h2></div>
                <table id="payment">
                <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Amount Donated </th>
                    </tr>
                    {this.state.myStatus.map((leader) =>
                        {
                        return(
                            <tr>
                                <td>{leader.rank}</td>
                                <td>{leader.name}</td>
                                <td> &#8377; {leader.donations}</td>
                            </tr>
                        ) ;
                        })}

                </table>
            </div>
        )
    }
}
export default Table;