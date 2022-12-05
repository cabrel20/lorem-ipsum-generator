import React,{useState} from "react";
import Texts from "./data";

function App() {
 document.getElementById("body").classList="bg-slate-100"
 const[numberOfText,setNumberOfText]=useState(0);
 const [words,setWords]=useState([]);
  const textHandler=(event)=>{
    event.preventDefault();
    setWords(Texts.filter((text)=>text.id<=numberOfText));
  }
  return (
    
   <React.Fragment>
    <div className="py-20 flex flex-col items-center">
      <div className="flex flex-col items-center gap-3">
      <h1 className="text-3xl font-bold text-gray-600">Tired of boring lorem ipsum ?</h1>
       <form className="flex flex-row items-center justify-center">
        <p className="text-xl text-gray-500 pr-2">Paragraphs:</p>
        <input type="number" min="0" step="1" className="w-1/5 h-8" value={numberOfText} onChange={(event)=>{
          setNumberOfText(event.target.value)
        }}/>
        <button type="submit" onClick={textHandler} className="px-4 py-2 bg-blue-400 text-white rounded-md ml-3 hover:bg-blue-300">Generate</button>
       </form>
      </div>{
        words.map((word)=> <p key={word.id} className="text-md text-gray-500 text-center w-1/2 pt-12">{word.text}</p>)
      }
     
    </div>
   </React.Fragment>
  );
}

export default App;
