import React from 'react'
import './sidebar.css'
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { IconButton ,Avatar } from '@material-ui/core';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar_head">
                <div className="head_right">
                
                 <Avatar src="logo.svg"/>
                
                </div>
                <div className="head_left">
                <IconButton> 
                    <DonutLargeIcon/></IconButton>
                    <IconButton> 
                    <ChatIcon/></IconButton>
                    <IconButton> 
                    <MoreVertIcon/></IconButton>
                     
                    
                </div>
            </div>
            <div className="serch">
                <SearchOutlined></SearchOutlined>
                <input className="input"></input>
            </div>
            <div className="side_body">
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>


            </div>
        </div>
    )
}

export default Sidebar
