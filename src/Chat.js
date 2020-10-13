import { Avatar, Button, IconButton, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './chat.css'
import SendIcon from '@material-ui/icons/Send';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import axios from "./axios";


import AccountCircleIcon from '@material-ui/icons/AccountCircle';import MoreVertIcon from '@material-ui/icons/MoreVert';
import { AttachFile, SearchOutlined } from '@material-ui/icons';
const Chat = ({mesages}) => {
    const time=new Date().toUTCString();
    const [input,setInput]=useState("")
     const  sendMessage = async(e)=>{
         e.preventDefault();

                console.log(input)
               await axios.post("/message/new",{
                    "message":input,
                        "name":"suman",
                        "timestamp":time,
                        "received":false
                }
                    
                )
                setInput("");
    };
    useEffect(() => {
        



    }, [])
    
    return (
        <div className="chat">
            <div className="header">
                <Avatar/>
                <div className="header_info">
                    <h3>room name</h3>
                    <p>last seen at</p>
                </div>
                <div className="header_right">
                <IconButton> 
                    <SearchOutlined/></IconButton>
                    <IconButton> 
                    <AttachFile/></IconButton>
                    <IconButton> 
                    <MoreVertIcon/></IconButton>
                </div>
            </div>
            <div className="chat_body" id ="body">
               {
                   mesages.map((mesage)=>(

                    <p
                     className={`chat_msg ${!mesage.received && "chat_msg_r" }`}
                     >
                    <span className="chat_name">{mesage.name}</span>
                        {mesage.message}
        <span  className="time">{mesage.timestamp}</span>
                        </p>
    ))
               }



                
                   
                    {/* <p className=" chat_msg chat_msg_r">
                <span className="chat_name">name</span>
                    msg
    <span  className="time">{new Date().toUTCString()}</span>
                    </p> */}
            </div>
            <div className="chat_footer">
            <form className="TYPE" noValidate autoComplete="off">
            <input className="input" value={input}   onChange={e=> setInput(e.target.value)} fullWidth ="true"   placeholder="type your msg  hr" />
            <button   onClick={sendMessage} type="submit" ><SendIcon></SendIcon></button>
            </form>
            

            </div>
        </div>
    )
}

export default Chat
