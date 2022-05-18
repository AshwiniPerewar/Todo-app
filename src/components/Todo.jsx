import React from  "react";
import {useState} from "react";
import styles from "./todo.css";
import TodoList from './TodoList';
let Todo=()=>
{
    const[value,setValue]=useState("");
    const[todos,setTodos]=useState([]);

    const onDelete=(id)=>
    {
        let newTodos=todos.filter((todo)=>todo.id!==id);
        setTodos(newTodos)
    };
    
    return (
        <div className="todo">
            <h1>Todo</h1>
            <input placeholder="Write Something" className="input"
            value={value} 
            onChange={(e)=>
            {
                setValue(e.target.value);
            }}></input>
            <button className="button" onClick={()=>{
                setTodos([...todos,{id:Date.now(),value:value}]);
                setValue("");
            }}>+</button>
            <div className={styles.todoList}>
                    {todos.map((todo)=>(
                <TodoList key={todo.id} todo={todo} onDelete={onDelete}/>
            ))}
            
            </div>
        </div>
    );
};

export default Todo;