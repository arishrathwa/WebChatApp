import React, { Fragment,useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
export default function ChatUI({ title, onDelete,params }) {
    // To access props from react routers useLocation hook is used
    const location = useLocation()
    console.log("PARAMS : ",location.params)
    const [friendGroup, setfriendGroup] = useState(location.params)
    //*************************************************************** */

    //*******WEB SOCKETS********************************************* */

        
    const roomName = friendGroup.connectionid;
    /****///
    
    class LoadOldMessagesStatus {
        static loaded = false
        static loadmsgcount = 1
        static loadValue() {
            return this.loaded;
        }
    }    

    let sender ="";
    
    /**/
    let  chatSocket = new WebSocket(
        'ws://'
        + window.location.host
        + '/ws/chat/'
        + roomName
        + '/'
    );;
    
    useEffect(() => {
        
    }, []) 

    const [chatmessages, setchatmessages] = useState([])
    const [textItem, settextItem] = useState("")


    const onChange = (e)=>{
        settextItem(e.target.value)
    }


    chatSocket.onmessage = function(e) {
        const data = JSON.parse(e.data);
        console.log(data)
        // if(data.messagestamp == 'new' || (data.messagestamp == 'old' && !LoadOldMessagesStatus.loadValue())) {
            setchatmessages([...chatmessages,data])
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
    };

    chatSocket.onclose = function(e) {
        console.error('Chat socket closed unexpectedly');
    };

    // document.querySelector('#chat-message-input').focus();
    // document.querySelector('#chat-message-input').onkeyup = function(e) {
    //     if (e.keyCode === 13) {  // enter, return
    //         document.querySelector('#chat-message-submit').click();
    //     }
    // };

        const onclick = function(e) {
       
        const message = textItem;
        sender =   friendGroup.username;
        chatSocket.send(JSON.stringify({
            'message': message,
            'sender' : sender
        }));
        
        settextItem("")
        // document.querySelector("#chat-message-sender").value = "";
    };


    //*/*//////////////////////////////////////////////////////////////


    //**************************************************************** */
    
    return (
        <Fragment>
            <div className='container-fluid p-2'>
                <nav class="navbar navbar-dark bg-primary">
                    <div class="container-fluid">
                        <NavLink className="btn btn-light" exact to="/friends">Back</NavLink>
                        <h3>{friendGroup.friend}</h3>
                    </div>
                </nav>    
                <div className='overflow-auto'>
                    {
                        chatmessages.length !== 0?
                            chatmessages.map((message)=>{
                                return(
                                    <>
                                    {message.data}
                                    </>
                                )
                            })
                        :
                        "No Messages"
                    }
                    {/* CHAT COMPONENT */}
                </div>
                <nav class="navbar fixed-bottom navbar-light bg-light">
                    <div class="container-fluid">
                    <input type="text" id="chat-message-submit" onChange={(e)=>{onChange(e)}} className='form-control w-50 mx-auto' />
                    <a class="btn btn-success mx-auto" onClick={(e)=>{onclick(e)}} href="#">Send</a>
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}
