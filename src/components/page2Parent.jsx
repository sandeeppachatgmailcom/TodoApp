import React, { createContext, memo, useState } from "react";  
import Child from "./Page2Child";

export const classContext = createContext()

function Parent( ){
    const [value,setValue] = useState(0);    
    return(
        <div>
            <classContext.Provider value={'bg-warning'} >
                <button className="btn btn-primary" onClick={()=>{
                    setValue(value+1)
                }}> increment</button>
                <h5>{value }</h5>
                <h1>Parent Component </h1>
                <Child value={value} / >
            </classContext.Provider>
            
        </div>
    )
}

export default Parent