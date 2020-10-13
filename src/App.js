import React, { useEffect, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from "pusher-js";
import axios from "./axios";
import Login from "./Login";

function App() {
  const[mesages,setMessages]=useState([])
  const [user,setUser] =useState("suman")
  useEffect(() => {
    axios.get('/message/sync').then(Response=>{
      setMessages(Response.data)
    })
  }, [])




  useEffect(() => {
    Pusher.logToConsole = true;

    const pusher = new Pusher('75d142c9ace3712f94e3', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
     // alert(JSON.stringify(data));
      setMessages([...mesages,data])
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [mesages]);
  console.log(mesages);


  return (
    <div className="App">
      {!user ?(<div className="login">
            <Login/>
            </div>):(
              <div className="app_body">
              <Sidebar></Sidebar>   
             <Chat mesages={mesages}/>   
             </div>
            )}
            
            

    {/**/}
    
    </div>
  );
}

export default App;
