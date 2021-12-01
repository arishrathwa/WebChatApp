import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { send_notification } from '../actions/notification'
const FriendCard = ({ friend, onDelete ,username ,send_notification,tag})=> {
    let cardStyle = {
       
        minWidth:"15rem",
        maxWidth:"20rem",
    }
    console.log("SENDER : ",username)
    console.log("FREND : ",friend)
    console.log("friend : ",friend.username)
    console.log("TAG : ",tag)
    return (
        <>
        <div className="card d-flex border border-dark m-2" style={cardStyle}>
            <div className="card-header border-success">{friend.friend}</div>
            <div className="card-body text-dark">
                <h5 className="card-title">Task</h5>
                <p className="card-text">{}Busy</p>
            </div>
            <div className="card-footer bg-transparent border-success">
                <button className="btn btn-sm btn-outline-danger m-2" onClick={() => onDelete(username)}> Profile </button>
                {
                 friend.tag === "friend" || tag === "friend"?
                 <NavLink className="btn btn-primary btn-sm m-2"  exact to={{pathname:`/chats/${friend.connectionid}`,params:friend}}>Chat</NavLink>
                 :   
                <button className="btn btn-sm btn-outline-primary m-2" onClick={() => send_notification(username,friend.username,"sent","")}> + Add Friend </button>
                    
                            
                }   
            </div>
            
        </div>
        </>
    )
}

const mapStateToProps = state => ({
    username : state.profile.username,
    
})
export default connect(mapStateToProps,{send_notification})(FriendCard);
