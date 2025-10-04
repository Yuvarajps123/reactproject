import React from 'react'
import { useState ,useContext} from 'react'

import './Sidebar.css'
<script src="https://kit.fontawesome.com/84e659310f.js" crossorigin="anonymous"></script>
import menu from '/src/image/menu.jpg'
import plus from '/src/image/plus.png'
import message from '/src/image/message.svg'
import question from '/src/image/question.jpg'
import setting from '/src/image/setting.png'
import activity from '/src/image/activity 2.png'
import { Context } from '../../context/Context';
function Sidebar() {
    
    const [extend, setExtend] = useState(false)
    const {onSent,prevPrompts,setRecentPrompt,newchat}=useContext(Context)

    const load =async (prompt)=>{
      setRecentPrompt(prompt)
           await onSent(prompt)
    }
    return (
        <div className='Sidebar'>
            <div className='top'>
              <img onClick={() =>{setExtend(prev=>!prev)}}className="menu" src={menu} alt=""/>
              <div onClick={() =>{newchat()}}className="newchat">
              <img src={plus} alt=""/>
              {extend?<p>New Chat</p> :null}
              </div>
             {extend ?<div className="recent">
               <p className="recent-title">Recent</p>
               {prevPrompts.map((item,index)=>{
                   return (
                    <div onClick={()=>{load(item)}} className="recent-entry">
                    <img src={message} alt=""/>
                    <p>{item.slice(0,18)}...</p>
                   </div>
                   )
               })}
              
              </div>
              :null}
            </div>
            <div className="bottom">
             <div className="bottom-item recent-entry">
              <img src={question} alt=""/>
              {extend?<p>Help</p>:null}
             </div>
             <div className="bottom-item recent-entry">
              <img src={activity} alt=""/>
              {extend ?<p>Activity</p>:null}
             </div>
             <div className="bottom-item recent-entry">
              <img src={setting} alt=""/>
             {extend ?<p>Setting</p>:null}
             </div>
            </div>
        </div>
    )
}

export default Sidebar
