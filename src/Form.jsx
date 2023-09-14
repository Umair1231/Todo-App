import React, { useState } from "react";
import './App.css'

export default function FormComponent()
{
    const [TodoTask, setTodoTask] = useState([
        {id: 1, text: "Yes", done:false},
        {id: 2, text: "No", done:false}
    ]);

    const [newTodo, setNewTodo] = useState('');
    const HandleDone = (id) =>
    {
        
        setTodoTask((PrevTodo) =>{
            return PrevTodo.map((todo) =>{
                if(todo.id === id)
                {
                    return { ...todo, done: !todo.done}
                }
                else
                {
                    return todo;
                }
            })
        })
    }

    const HandleDelete = (id) =>
    {
        setTodoTask((PrevTodo) => PrevTodo.filter((todo) => todo.id !== id))
    }

    const HandleSubmit = (e) =>
    {
        e.preventDefault();
        if(newTodo === '')
        return;
        const NewID = TodoTask.length + 1;
        const NewTask = {id: NewID, text: newTodo, done:false}
        setTodoTask((PrevTodo) => [...PrevTodo, NewTask]);
        setNewTodo('')
    }
    return(
        <div className="App">
            <form className="SubmitForm" onSubmit={HandleSubmit}>
                <input className="InputField"type="text" placeholder="Add Todos" value = {newTodo} onChange={(e) => setNewTodo(e.target.value)} />
                <br />
                <button className="SubmitButton">Submit</button>
            </form>
            <table className="TodoTable">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {TodoTask.map((todo) =>
                    (
                        <tr className="TodoItem" key={todo.id}>
                            < td>{todo.text}</td>
                            <td>
                                <button onClick={()=>HandleDone(todo.id)}>
                                {todo.done ? 'Undone':'Done'}
                                </button>
                                <button onClick={() => HandleDelete(todo.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}