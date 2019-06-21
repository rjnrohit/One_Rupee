import React from 'react'
import './Table.css'

const Table= props=>{

    const renderTableHeader = ()=>{
        let header = Object.keys(props.payments[0])
        header.unshift("id")
        console.log(header)
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
    }
  
    const renderTableData = ()=>{
        return props.payments.map((payment, index) => {
           const { date, Name, Amount } = payment
           let id = index+1
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{date}</td>
                 <td>{Name}</td>
                 <td>{Amount}</td>
              </tr>
           )
        })
    }
  
    return (
        <div>
            <h1 id='title'>Payment History</h1>
            <table id='payment'>
                <tbody>
                <tr>{renderTableHeader()}</tr>
                {renderTableData()}
                </tbody>
            </table>
        </div>
    )
}

export default Table