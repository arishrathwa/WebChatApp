import React, { Fragment, useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { store_friend_connection } from "../actions/friends";
import { send_notification } from "../actions/notification";
import { get_notification_list } from "../actions/notification";
const Notification = ({notifications,username,store_friend_connection,send_notification,get_notification_list}) => {

    const [notifyList, setnotifyList] = useState([])

    // useEffect(async ()=>{
    //    setnotifyList([...notifications])
    // },[notifyList]);
    console.log("Not List : ",notifyList)
    console.log("noti list : ",notifications);
    const onClick = async (e,sender,receiver,status,info)=> {
        if(info !== "")
            await store_friend_connection(receiver,sender,info);
        console.log("info : ",info)
        if(status !== "done")
        await send_notification(sender,receiver,status,"")

    }
    const onDeny = async(e,sender,receiver,status)=>{
        await send_notification(sender,receiver,status,"")
    }
    const getNotify =  (e)=> {
         get_notification_list(username);
    }
    return (
        <Fragment className="nav-item">
            <Link className="nav-link " type="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" onClick={(e)=>{getNotify(username)}} aria-controls="offcanvasBottom">Notifications</Link>

            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Notifications</h5>
                    <button type="button" className="btn-primary btn-sm" onClick={(e)=>{getNotify(username)}} data-bs-dismiss="offcanvas" aria-label="Close">Refresh</button>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body small">
                {
                    
                notifications.length !== 0 ?  
                notifications.map(
                        (notification) => {
                            console.log("in card iteration")
                            return (
                                <>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">{notification.sender}</h5>
                                        <p class="card-text">{notification.status}</p>
                                        {notification.request === "sent"?<>
                                        <button type="button" class="btn btn-outline-primary btn-sm" onClick={(e)=>{onClick(e,notification.sender,notification.receiver,"accept")}}>Accept</button>
                                        <button type="button" class="btn btn-outline-danger btn-sm" onClick={(e)=>{onDeny(e,notification.sender,notification.receiver,"deny")}}>Deny X</button>
                                        </>
                                        :
                                        <button type="button" class="btn btn-outline-primary btn-sm" onClick={(e)=>{onClick(e,notification.sender,notification.receiver,"done",notification.info)}}>Confirm</button>
                                              
                                        }
                                    </div>
                                </div>
                                </>
                                 )
                            
                        }
                    ):
                        <>
                            <div class="card">
                            <div class="card-body">
                                This is some text within a card body.
                            </div>
                            </div>
                                

                        </>
                    }      
                </div>
            </div>
                    

        </Fragment>
    );
}

const mapStateToProps = state => {
    console.log("state noti : ",state.notifications)
    console.log(state.notifications.notify_list)
    return {
    notifications:state.notifications.notify_list,
    username:state.profile.username
    //these are the variables passed as props globally tomaintain state of application
}}

export default connect(mapStateToProps,{store_friend_connection,send_notification,get_notification_list})(Notification);