import React from 'react';
import Table from './Table.js'
import './Donations.css'

class Donations extends React.Component{
    constructor() {
        super()
        this.state = {
            payments: [
                { date: '', Name: '', Amount: ''},
                { date: '', Name: '', Amount: ''},
                { date: '', Name: '', Amount: ''},
                { date: '', Name: '', Amount: ''},
            ]
        }
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

export default Donations;