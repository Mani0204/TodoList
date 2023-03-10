import React, {useEffect} from 'react';
import {v4 as uuidv4} from "uuid";

const Form = ({input, setInput, todos, setToDos, editTodo, setEditTodo}) => {

    const updateToDo = (title, id, completed) => {
        const newToDo = todos.map((todo) =>
        todo.id === id ? {title, id, completed} : todo
    )
setToDos(newToDo);
setInput("");
    };
useEffect(() =>{
if(editTodo){
    setInput(editTodo.title);
} else {
    setInput("")
}
}, [setInput, editTodo]);

    const onInputChange =(event) =>{
setInput(event.target.value);
 };

 const onFormSubmit =(event) =>{
event.preventDefault();
if(!editTodo){
    setToDos([...todos, {id:uuidv4(), title: input, completed: false}]);
    setInput("");
}
 else {
    updateToDo (input, editTodo.id, editTodo.completed)
    setEditTodo("");
}
};

return  (
    
<form onSubmit = {onFormSubmit} >
<input 
type="text" 
placeholder="Enter a ToDo...." 
className="task-input"
value={input}
required
onChange={onInputChange}
/>
<button className="button-add" type="submit">
    {editTodo ? "OK" : "Add"}
</button>
</form>
);

}

export default Form;