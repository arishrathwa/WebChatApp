import axios from 'axios'
import React, { Fragment, useState, useEffect,useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
// import axios from 'axios'
console.log("GREAT DEAl")
let count = 0;


class SocketOp {
    
    constructor() {
        
    }
    static chatSocket = {}
    static setChatSocket(socket) {
        SocketOp.chatSocket = socket
        SocketOp.chatSocket.onopen = (e)=>{
            console.log("OPENDED SOCKET GATE");
            SocketOp.socketState = true;
        }
    }
    static socketState = false;
    

    
} 

const ChatUI = ({ title, onDelete, params })=> {
    // To access props from react routers useLocation hook is used
    const location = useLocation()
    console.log("PARAMS : ", location.params)
    const [friendGroup,setFriendGroup] = useState(location.params)
    //*************************************************************** */

    //*******WEB SOCKETS********************************************* */

    console.log("count : ",count++)

    const roomName = friendGroup.connectionid;
    const [socketVar, setsocketVar] = useState(SocketOp.socketState)
    console.log("Socket State : ",socketVar)

    useEffect(()=>{
        setsocketVar(!socketVar)
    },[SocketOp.socketState])
    //It is required as on opening websocket rerender is needed to start sending messages with latest state of component

    let sender = friendGroup.username;

    /**/
    useLayoutEffect(()=>{
       SocketOp.setChatSocket( 
         new WebSocket(
            'ws://'
            + window.location.host
            + '/ws/chat/'
            + roomName
            + '/'
        )
    )
    },[]);

    

    const [chatmessages,setchatmessages] = useState([])
    const [textItem, settextItem] = useState("")
    

    const onChangeMsgField = (e) => {
        settextItem(e.target.value)
        e.stopPropagation();
    }
    console.log("TextValue : ",textItem);
    console.log("ChatItems : ",chatmessages)

    SocketOp.chatSocket.onopen = (e)=>{
        console.log("CHat Socket Open..")
    }

    SocketOp.chatSocket.onmessage =  (e)=> {
        const data = JSON.parse(e.data);
        console.log("Receiving end : ",data)
        // if(data.messagestamp == 'new' || (data.messagestamp == 'old' && !LoadOldMessagesStatus.loadValue())) {
        setchatmessages((chatmessages) => [...chatmessages,data])
        // if(data.sender === sender)
        // document.querySelector('#chat-log').value += ('\t\t\t'+data.message+'\n')
        // else    
        //document.querySelector('#chat-log').value += (data.message + '\n');

        // if (data.messagestamp == 'old') {
        //     LoadOldMessagesStatus.loadmsgcount = data.messagecount
        //     if (LoadOldMessagesStatus.loadmsgcount == 1){
        //         LoadOldMessagesStatus.loaded = true;
        //     }
        // }    

        // }
        e.stopPropagation();
    };
    

    SocketOp.chatSocket.onclose = function (e) {
        console.error('Chat socket closed unexpectedly');
        <Redirect exact to="/friends"/>
    };

    // document.querySelector('#chat-message-input').focus();
    // document.querySelector('#chat-message-input').onkeyup = function(e) {
    //     if (e.keyCode === 13) {  // enter, return
    //         document.querySelector('#chat-message-submit').click();
    //     }
    // };

    const onClickSendMessag =  (e)=> {

        const message = textItem;
        sender = friendGroup.username;

        SocketOp.chatSocket.send(JSON.stringify({
            'message': message,
            'sender': sender,
            "connectionid":friendGroup.connectionid,
        }));

        console.log("MESSAGE SENT : ",message," SENDER : ",sender);
        e.stopPropagation();
        
        // document.querySelector("#chat-message-sender").value = "";
    };



    return (
        <Fragment>
            <div className='container-fluid p-2 mx-auto' >
                <nav class="navbar navbar-dark bg-primary">
                    <div class="container-fluid">
                        <NavLink className="btn btn-light" onClick={()=>{SocketOp.chatSocket.close()}} exact to="/friends">Back</NavLink>
                        <h3>{friendGroup.friend}</h3>
                    </div>
                </nav>
                <div className='overflow-auto'>
                    {
                        chatmessages.length !== 0 ?
                            chatmessages.map((message) => {
                                return (
                                    <>

                                        {
                                         message.sender === friendGroup.username?
                                         <>
                                            <div className='container-fluid mx-auto d-inline-flex justify-content-end w-100' >
                                                <div class="card  mt-1" style={{"max-width":"20rem"}}>
                                                    <div class="card-body">
                                                        <h5 class="card-title">{message.sender}</h5>
                                                        <p class="card-text">{message.message}</p>
                                                    </div>
                                                    <button type="button" className='btn btn-sm btn-danger'>Mark Fake</button>
                                                </div>
                                            
                                            </div>
                                            <br/>
                                         </>
                                         :
                                         <>
                                         <div className='container-fluid mx-auto d-inline-flex justify-content-start w-100'>
                                                <div class="card  mt-1 " style={{"max-width":"20rem"}}>
                                                    
                                                    <div class="card-body">
                                                        <h5 class="card-title">{message.sender}</h5>
                                                        <p class="card-text">{message.message}</p>
                                                    </div>
                                                    <button type="button"  className='btn btn-sm btn-danger'>Mark Fake</button>
                                            </div>
                                            
                                    </div>
                                    <br/>
                                         </>
                                        }
                                       
                                    </>
                                )
                            })
                            :
                            "No Messages"
                    }
                    {/* CHAT COMPONENT */}
                </div>
                <nav class="navbar fixed-bottom navbar-light bg-light">
                    <div class="container-fluid  flex-row justify-content-center">
                        <input type="text" id="chat-message-submit" onChange={(e) => onChangeMsgField(e) } className='form-control mw-100' />
                        <a class="btn btn-success" onClick={(e) => onClickSendMessag(e) } href="#">Send</a>
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}
export default connect("",{})(ChatUI);
