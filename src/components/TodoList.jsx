import React from  "react";
import  "./todo.css";
import TodoItem from "./TodoItem";

const TodoList=({todo,onDelete})=>
{
    return (
        <TodoItem todo={todo} onDelete={onDelete}/>
    )
}

export default TodoList;