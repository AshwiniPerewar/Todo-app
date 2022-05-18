import React from  "react";
import {useState} from "react";
import  "./todo.css";

let TodoItem=({todo,onDelete})=>
{
    const[iscompleted,setisCompleted]=useState("");
    
    
    return (
        <div className="todoitem" key={todo.id}>
            
            
             <div className="item"><p>{todo.value}</p>
            <input type="radio" className="check"
            checked={iscompleted} 
            onChange={(e)=>
            {
                setisCompleted(e.target.checked);
            }}></input>
            {/* <button onClick={()=>onDelete(todo.id)}>Delete</button> */}
            </div>
        </div>
    );
};

export default TodoItem;