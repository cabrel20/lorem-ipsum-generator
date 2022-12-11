import React,{useState} from "react";
/*import Wrapper from "./Components/Wrapper";
import CardItem from "./Components/CardItem";
import itemContext from "./Components/Store";*/
import Card from "./Components/Card";
import People from "./data";
import {BsFillCircleFill} from "react-icons/bs"
function App() {
 document.getElementById("body").classList="bg-slate-100"
/*const cardItem=useContext(itemContext);
 const addItemHandler=(event)=>{
       event.preventDefault();
       const item={
        id:Math.random(),
        valeur:event.target.value,
       }
       cardItem.setItems(()=>{
        return cardItem.items=[...cardItem.items,item];
       })
 }

   return (<React.Fragment>
        <div className="flex flex-col items-center justify-center py-20">
        <Wrapper className="w-3/6 bg-slate-50 rounded-sm shadow-lg flex flex-col items-center justify-center">
             <h1 className="text-gray-700 text-3xl py-2">Grocery Bud</h1>
             <form className="py-6 flex flex-row w-4/6">
              <input type="text" className="bg-slate-300 text-gray-800 w-full" placeholder="eg: eggs"/>
              <button onSubmit={addItemHandler} className="px-2 bg-sky-500 text-white rounded-r-sm hover:bg-sky-300">Submit</button>
             </form>
             <div className="w-4/6">
              {cardItem.items.map((itm)=><CardItem id={itm.id} valeur={itm.valeur}/>)}
             </div>
        </Wrapper>
        </div>
   </React.Fragment>)*/
   const [index,setIndex]=useState(0);
  
 
   return(<React.Fragment>
          <div className="flex flex-col items-center gap-4 mt-6">
              <h1 className="text-4xl text-gray-600 uppercase">Comments</h1>    
              <Card img={People[index].img} text={People[index].text} name={People[index].name}/> 
              <div className="flex flex-row items-center justify-center gap-2">
                {People.map((person)=><BsFillCircleFill  className={`cursor-pointer ${index===person.id-1?"text-blue-400":null}`} key={person.id-1} onClick={()=>{setIndex(person.id-1)}}/>)} 
              </div>
          </div> 
   </React.Fragment>)
}

export default App;
