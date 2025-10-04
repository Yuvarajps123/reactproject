import {createContext,useState} from'react'
export const Context= createContext();
import run from '../confi/Gemini'
const Contextprovider =(props) =>{
 
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");
    const delay=(index,nextword) =>{
         setTimeout(function(){
             setResultData(prev => prev+nextword);
         },75*index)
    }
    const newchat= () =>{
        setLoading(false)
        setShowResult(false)
    }
    const onSent=async(prompt) =>{
        setResultData("")
        setLoading(true)
        setShowResult(true)
        let response;
        if(prompt!== undefined){
            response= await run(prompt);
            setRecentPrompt(prompt)    }
        else{
            setRecentPrompt(input)
            setPrevPrompts(prev =>[...prev,input])
           response= await run(input)
        }    
        
      let responseArray = response.split("**")
      let newResponse="";
      for( let i=0;i<responseArray.length;i++){
          if(i===0 || i%2 !==1){
              newResponse+=responseArray[i];
          }
          else{
              newResponse+="<b>" + responseArray[i] +"</b>"
          }
      }
      let newResponse2=newResponse.split("*").join("</br>")
      let newResponseArray=newResponse2.split(" ")
      for(let i=0;i<newResponseArray.length;i++){
          const nextword=newResponseArray[i];
          delay(i,nextword+" ")
      }
      setLoading(false)
      setInput("")
    }
   

    const contextValue={
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newchat


    }
    return(
        <Context.Provider value={contextValue}>
        {props.children}
        </Context.Provider>
    )
}
export default Contextprovider;