import React from "react"

export default class Registration extends React.Component
{
    constructor()
    {
        super();
        this.state={};
    }
    render()
    {
        return(
            <div>
                <header>
                    <h1 style ={{textAlign:"center"}}>Join Us Now</h1>
                    <form action="" method ="POST" style={{marginLeft:"30%",marginRight:"30%",textAlign:"justify",padding:"2% 3%",fontSize:"20px",backgroundColor:"skyblue",borderRadius:"5px"}}>
                        <h3 style={{textAlign:"center",marginTop:"0%"}}>Register as user</h3>
                        <b style={{width:"20%"}}>Name   </b><input type= "text"  name="name" placeholder="Name" style={{padding:"1%",width:"80%",borderRadius:"5px"}} required/><br/><br/>
                        <b style={{width:"20%"}}>E-Mail   </b><input type= "email"  name ="email" placeholder ="E-Mail"style={{padding:"1%",width:"79%",borderRadius:"5px"}} required/><br/><br/>
                        <b style={{width:"20%"}}>Mobile No.   </b><input type = "text"  name = "mob_no" placeholder="Mobile No." style={{padding:"1%",width:"72%",borderRadius:"5px"}} required/><br/><br/>
                        <b style={{width:"20%"}}>Password </b><input type = "password"  name="password" placeholder = "Enter your password" style={{padding:"1%",width:"74%",borderRadius:"5px"}} required/><br/><br/>
                        <input type ="submit" value ="Register"style={{color :"white",backgroundColor:"blue",border:"none",padding:"1% 2%",borderRadius:"5px",fontSize:"20px",textAlign:"center",marginLeft:"40%",marginRight:"40%",marginTop:""}} required/>
                    </form>
                    <br/><center>OR</center>  <br/>
                    <form action="" method ="POST" style={{marginLeft:"30%",marginRight:"30%",marginBottom:"5%",textAlign:"justify",padding:"2% 3%",fontSize:"20px",backgroundColor:"skyblue",borderRadius:"5px"}}>
                        <h3 style={{textAlign:"center",marginTop:"0%"}}>Register as NGO</h3>
                        <b style={{width:"20%"}}>Name of NGO </b><input type= "text"  name="name" placeholder="Name" style={{padding:"1%",width:"67%",borderRadius:"5px"}} required/><br/><br/>
                        <b style={{width:"20%"}}>Category   </b>
                        <select name="category" style={{padding:"1%",width:"74%",borderRadius:"5px"}} required>
                        <option value= "AGRICULTURE" >AGRICULTURE</option>
                        <option value= "ANIMAL WELFARE">ANIMAL WELFARE</option>
                        <option value= "ART AND CRAFT" >ART AND CRAFT</option>
                        <option value= "CHILD EDUCATION" >CHILD EDUCATION</option>
                        <option value= "CITIES/URBAN DEVELOPMENT">CITIES/URBAN DEVELOPMENT</option>
                        <option value= "COMMUNITY DEVELOPMENT">COMMUNITY DEVELOPMENT</option>
                        <option value= "CULTURE AND HERITAGE" >CULTURE AND HERITAGE</option>
                        <option value= "DISABILITY">DISABILITY</option>
                        <option value= "DISASTER MANAGEMENT">DISASTER MANAGEMENT</option>
                        <option value= "DRINKING WATER">DRINKING WATER</option>
                        <option value= "EDUCATION">EDUCATION</option>
                        <option value= "ENVIRONMENTAL ISSUES">ENVIRONMENTAL ISSUES</option>
                        <option value= "HEALTH AND HYGIENE" >HEALTH AND HYGIENE</option>
                        <option value= "HIV/AIDS" >HIV/AIDS</option>
                        <option value= "HOUSING AND SLUMS">HOUSING AND SLUMS</option>
                        <option value= "POPULATION">POPULATION</option>
                        <option value= "POVERTY REMOVAL">POVERTY REMOVAL</option>
                        <option value= "RURAL DEVELOPMENT">RURAL DEVELOPMENT</option>
                        <option value= "SCIENCE AND TRECHNOLOGY DEVELOPMENT">SCIENCE AND TRECHNOLOGY DEVELOPMENT</option>
                        <option value= "TRIBAL PEOPLE">TRIBAL PEOPLE</option>
                        <option value= "WASTE MANAGEMENT">WASTE MANAGEMENT</option>
                        <option value= "WOMEN">WOMEN</option>
                        <option value= "OTHERS">OTHERS</option>
                </select><br/><br/>
                        <b style={{width:"20%"}}>E-Mail   </b><input type= "email"  name ="email" placeholder ="E-Mail"style={{padding:"1%",width:"79%",borderRadius:"5px"}} required/><br/><br/>
                        <b style={{width:"20%"}}>Mobile No.   </b><input type = "text"  name = "mob_no" placeholder="Mobile No." style={{padding:"1%",width:"72%",borderRadius:"5px"}} required/><br/><br/>
                        <b style={{width:"20%"}}>Password   </b><input type = "password"  name="password" placeholder = "Enter your password" style={{padding:"1%",width:"74%",borderRadius:"5px"}} required/><br/><br/>
                        <input type ="submit" value ="Register"style={{color :"white",backgroundColor:"blue",border:"none",padding:"1% 2%",borderRadius:"5px",fontSize:"20px",textAlign:"center",marginLeft:"40%",marginRight:"40%"}} required/>
                    </form>
                </header>
            </div>

        )
    }
}