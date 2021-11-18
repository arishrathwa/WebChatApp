import React from 'react'

export default function FriendCard({ title, onDelete ,username }) {
    let cardStyle = {
       
        minWidth:"15rem",
        maxWidth:"20rem"
    }
    return (

        
        <div className="card d-flex border border-dark m-2" style={cardStyle}>
            <div className="card-header border-success">{title}</div>
            <div className="card-body text-dark">
                <h5 className="card-title">Task</h5>
                <p className="card-text">{}Busy</p>
            </div>
            <div className="card-footer bg-transparent border-success">
                <button className="btn btn-sm btn-outline-danger " onClick={() => onDelete(username)}> Delete </button></div>
        </div>
    )
}
