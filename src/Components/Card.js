import {RiDoubleQuotesL} from "react-icons/ri"
import {RiDoubleQuotesR} from "react-icons/ri"

function Card({name,img,text}){
    return(<>
    <div className="w-2/5 rounded-lg shadow-lg bg-slate-50 py-2">
       
           <div className="flex flex-col gap-2 w-full items-center justify-center pt-6">
           <img src={img} alt="person" className="w-28 h-28 rounded-full object-cover border-4 border-blue-300"/>
            <h1 className="text-gray-700 text-lg">{name}</h1>
           </div>
           <div className="flex flex-col gap-2 w-full">
             <RiDoubleQuotesL size={50} className="text-blue-600 mx-8"/>
            <p className="text-md text-gray-500 text-center px-12">{text}</p>
            <RiDoubleQuotesR className="text-blue-600 mx-96" size={50}/>
           </div>
      
    </div>
    </>)
}

export default Card