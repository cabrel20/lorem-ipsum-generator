import {AiFillDelete} from "react-icons/ai"
import {FaEdit} from "react-icons/fa"

function CardItem({id,valeur}){
    return(<>
      <div className="flex flex-row items-center justify-around my-5 w-full bg-slate-50 hover:bg-slate-200 transition-all duration-500 ease-in-out">
        <h2 className="text-md text-gray-500">{valeur}</h2>
        <div className="flex flex-row items-center gap-3">
            <button><AiFillDelete className="text-red-500"/></button>
            <button><FaEdit className="text-lime-600"/></button>
        </div>
      </div>
    </>)
}

export default CardItem