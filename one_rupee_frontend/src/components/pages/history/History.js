import React from 'react';
import Table from './Table.js'
import './History.css'

const sampleHistory = {
    date: '21/6/19' , 
    time: '21:00' ,
    Name: 'abc' , 
    Amount: '1,00,00,000' ,
}

class History extends React.Component{
    constructor() {
        super()
        this.state = {
            payments: [{date: '', time: '', Name: '', Amount: ''}]
        }
    }

    componentDidMount(){
        // Fetch 
        this.setState({payments:[sampleHistory, sampleHistory, sampleHistory, sampleHistory]})
    }
    
    render(){
        return(
            <div>
                <div className="stats">
                    {/* Create card for stats here */}
                </div>
                <div className="paymentHistory">
                    <Table payments={this.state.payments} />
                </div>
            </div>
        )
    }
}

export default History;