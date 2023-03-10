import React from "react";

const ToDosList = ({todos, setToDos, setEditToDo}) => {

    const handleComplete = (todo) => {
        setToDos(
            todos.map((item) =>{
      if(item.id === todo.id) 
      {
        return {...item, completed: !item.completed};
      }
return item;
        })
        );
    };

const handleEdit =({id}) => {
     const findToDo = todos.find((todo)  => todo.id === id);
     setEditToDo(findToDo);
     
};

const handleDelete = ({id}) => {
        setToDos(todos.filter((todos) => todos.id !==id));
    }
return (
<div> 
{todos.map((todo) =>
<li className="list-item" key={todo.id}>
<input type= "text" 
value= {todo.title} 
className= {`list ${todo.completed ? "complete" : ""}` } 
style={{textDecoration : todo.completed ? "line-through" : " "}}
onChange={(event) => event.preventDefault()} 
/>
<div>
    <button className="button-complete task-button" onClick = {()=> handleComplete (todo)}>
    <i class="fa fa-check-circle"></i>
    </button>
    <button className="button-edit task-button" onClick ={() => handleEdit(todo)}>
<i className="fa fa-edit"></i>
    </button>
    <button className="button-delete task-button" onClick = {()=> handleDelete(todo)}>
<i className="fa fa-trash"></i>
    </button>
</div>
</li>
)}

</div>);
};

export default ToDosList;