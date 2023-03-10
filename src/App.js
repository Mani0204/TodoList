import React, {useState, useEffect} from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import ToDosList from "./Components/ToDosList";
import "./App.css";

const App = () => {

  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] =   useState("");
  const [todos, setToDos] =   useState([]);
  const [editTodo , setEditToDo] = useState(null);

  useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
return (<div className="container">
<div className="app-wrapper">
<div>
  <Header/>
</div>
<div>
  <Form
  input={input}
  setInput={setInput}
  todos={todos}
  setToDos={setToDos}
editTodo={editTodo}
  setEditToDo={setEditToDo}
  />
</div>
<div>
  <ToDosList 
  todos={todos} 
  setToDos={setToDos} 
  setEditToDo={setEditToDo}
  />
</div>
</div>
</div>
);
}

export default App;