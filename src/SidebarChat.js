import React from 'react'
import './sidebar.css'
import { IconButton ,Avatar } from '@material-ui/core';


const SidebarChat = () => {
    return (
        <div className="sidebar_chat">
            <Avatar/>
            <div className="info">
                <h2>room name</h2>
                <p>lasrt msg</p>
            </div>
            
        </div>
    )
}

export default SidebarChat
