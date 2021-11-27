
        // import React, { useState, useCallback, useEffect } from 'react';
        // import useWebSocket, { ReadyState } from 'react-use-websocket';
        
        // export const WebSocketT = ({roomName}) => {
        //   //Public API that will echo messages sent to it back to the client
        //   const [socketUrl, setSocketUrl] = useState( 'ws://'
        //   + window.location.host
        //   + '/ws/chat/'
        //   + roomName
        //   + '/');
        //   const [messageHistory, setMessageHistory] = useState([]);
        
        //   const {
        //     sendMessage,
        //     lastMessage,
        //     readyState,
        //   } = useWebSocket(socketUrl);
        
        //   useEffect(() => {
        //     if (lastMessage !== null) {
        //       setMessageHistory(prev => prev.concat(lastMessage));
        //     }
        //   }, [lastMessage, setMessageHistory]);
        
        //   const handleClickChangeSocketUrl = useCallback(() =>
        //     setSocketUrl('wss://demos.kaazing.com/echo'), []);
        
        //   const handleClickSendMessage = useCallback(() =>
        //     sendMessage('Hello'), []);
        
        //   const connectionStatus = {
        //     [ReadyState.CONNECTING]: 'Connecting',
        //     [ReadyState.OPEN]: 'Open',
        //     [ReadyState.CLOSING]: 'Closing',
        //     [ReadyState.CLOSED]: 'Closed',
        //     [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
        //   }[readyState];
        
        //   return (
        //     <div>
        //       <button
        //         onClick={handleClickChangeSocketUrl}
        //       >
        //         Click Me to change Socket Url
        //       </button>
        //       <button
        //         onClick={handleClickSendMessage}
        //         disabled={readyState !== ReadyState.OPEN}
        //       >
        //         Click Me to send 'Hello'
        //       </button>
        //       <span>The WebSocket is currently {connectionStatus}</span>
        //       {lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
        //       <ul>
        //         {messageHistory
        //           .map((message, idx) => <span key={idx}>{message ? message.data : null}</span>)}
        //       </ul>
        //     </div>
        //   );
        // };
        
        
        
        // // const roomName = JSON.parse(document.getElementById('room-name').textContent);
        // // /****///
        
        // // class LoadOldMessagesStatus {
        // //     static loaded = false
        // //     static loadmsgcount = 1
        // //     static loadValue() {
        // //         return this.loaded;
        // //     }
        // // }    

        // // let sender ="";
        
        // // /**/
        // // const chatSocket = new WebSocket(
        //     // 'ws://'
        //     // + window.location.host
        //     // + '/ws/chat/'
        //     // + roomName
        //     // + '/'
        // // );
        

        // // chatSocket.onopen = function(e) {
            
        // // }

        // // chatSocket.onmessage = function(e) {
        // //     const data = JSON.parse(e.data);
        // //     console.log(data)
        // //     if(data.messagestamp == 'new' || (data.messagestamp == 'old' && !LoadOldMessagesStatus.loadValue())) {

        // //         if(data.sender === sender)
        // //             document.querySelector('#chat-log').value += ('\t\t\t'+data.message+'\n')
        // //         else    
        // //             document.querySelector('#chat-log').value += (data.message + '\n');

        // //         if (data.messagestamp == 'old') {
        // //             LoadOldMessagesStatus.loadmsgcount = data.messagecount
        // //             if (LoadOldMessagesStatus.loadmsgcount == 1){
        // //                 LoadOldMessagesStatus.loaded = true;
        // //             }
        // //         }    

        // //     }
        // // };

        // // chatSocket.onclose = function(e) {
        // //     console.error('Chat socket closed unexpectedly');
        // // };

        // // document.querySelector('#chat-message-input').focus();
        // // document.querySelector('#chat-message-input').onkeyup = function(e) {
        // //     if (e.keyCode === 13) {  // enter, return
        // //         document.querySelector('#chat-message-submit').click();
        // //     }
        // // };

        // // document.querySelector('#chat-message-submit').onclick = function(e) {
        // //     const messageInputDom = document.querySelector('#chat-message-input');
        // //     const message = messageInputDom.value;
        // //     sender =   document.querySelector("#chat-message-sender").value;
        // //     chatSocket.send(JSON.stringify({
        // //         'message': message,
        // //         'sender' : sender
        // //     }));
            
        // //     messageInputDom.value = '';
        // //     document.querySelector("#chat-message-sender").value = "";
        // // };
    