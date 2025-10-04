import React from 'react'
import user from '/src/image/user.jpg'
import compass from '/src/image/compass.png'
import bulb from '/src/image/bulb.png'
import message from '/src/image/message.svg'
import code from '/src/image/code.png'
import gallery from '/src/image/gallery2.png'
import mic from '/src/image/mic.png'
import send from '/src/image/send.webp'
import gemini from '/src/image/gemini.jpg'
import './Main.css'
import {useContext} from 'react'
import {Context} from '../../context/Context'
const Main = () =>{
    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=  useContext(Context)
    return (
        <div className="main">
            <div className="nav">
             <p>Gemini</p>
            <img src={user} alt=""/>
            </div>
            <div className="main-container">
            {!showResult 
            ?<><div className="greet">
            <p><span>Hello Aliens.</span></p>
            <p>How can I help you today?</p>
            </div>
            <div className="cards">
             <div className="card">
              <p>suggest a beautiful place</p>
              <img src={compass} alt=""/>
             </div>
             <div className="card">
              <p>suggest a beautiful idea</p>
              <img src={bulb} alt=""/>
             </div>
             <div className="card">
              <p>suggest a meaningfull message of today</p>
              <img src={message} alt=""/>
             </div>
             <div className="card">
              <p>suggest a most readable code</p>
              <img src={code} alt=""/>
             </div>
            </div></>
            :<div className="result">
               <div className="result-title">
                <img src={user} alt=""/>
                <p>{recentPrompt}</p>
               </div>
               <div className="result-data">
                <img src={gemini} alt=""/>
                {loading
                ?<div className="loader">
                <hr/>
                <hr/>
                <hr/>
                </div>
            :
                <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
               </div>
            </div>}
             
             <div className="main-bottom">
              <div className="search-box">
               <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter your doubt here"/>
               <div>
                 <img src={gallery} alt=""/>
                <img src={mic} alt=""/>
                {input ?<img onClick={()=>{onSent()}} src={send} alt=""/> :null}
               </div>
              </div>
              <p className="bottom-info">
              Gemini Api helps to clarify your doubts</p>
             </div>
            </div>
        </div>
    )
}

export default Main
