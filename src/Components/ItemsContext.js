import itemContext from "./Store";
function ItemProvider({children}){
    const [items,setItems]=useState([]);
    return(
        <itemContext.Provider value={{items,setItems}}>
            {children}
        </itemContext.Provider>
    )
}

export default ItemProvider