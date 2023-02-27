import React,{useState,useRef, useEffect} from "react"
import Client from "../client/client"
import "./editorpage.css"
import Codemirror from "../codemirror/codemirror"
import { initSocket } from "../../socket"
import {useLocation} from 'react-router-dom'
export default function Editorpage(){

    const socketRef=useRef(null)
useEffect(()=>{
   const init=async()=>{
      socketRef.current=await initSocket();
    //   socketRef.current.emit(ACTIONS.JOIN,{
    //     roomId,
    //     username:location.state?.username,
    //   });
   };
   init()
},[])
    const[clients,setClients]=useState([
        
        {socketId:1,username:"ram k"},
        {socketId:2,username:"virat k"}
    ])
    return(
<div className="mainWrap">
    <div className="aside">
        <div className="asideInner">
            <div className="Logo">
                Logo
            </div>
            <h3>connected</h3>
            <div className="clientList">
              {
                clients.map((client)=>(
                    <Client key={client.socketId} username={client.username}/>
                ))
              }
            </div>
        </div>
      <button className="btn copyBtn">Copy Room Id</button>  
      <button className="btn leaveBtn">Leave</button>
    </div>
    <div className="editorWrap">
        <Codemirror/>
    </div>
</div>

    )

}