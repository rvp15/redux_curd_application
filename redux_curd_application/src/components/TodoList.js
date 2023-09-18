import React from "react";
// to use state from redux store use useSelector hook
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { deleteTodo, delTodo } from "../redux/todoSlice";


const TodoList = () => {

const dispatch = useDispatch()
  //useSelector function has a fun where state is passed and returns current state(of todos) from redux store
  const todos = useSelector((state) => state.todos);
   const filteredtodo = todos.filter((x)=> x.complete === false)

  return (
    <div className="list-container"> 
    <h3>My Todos:</h3>

    <ul className="list-group">
      {filteredtodo.map((todo) => (
        <li key={todo.id} className="list-item">
          <div className="d-flex align-items-center listitems">
            <span>{todo.title}</span>
            <div>
            <button onClick={()=> dispatch(delTodo(todo))} className="btn btn-danger">Delete</button>
            <button onClick={()=> dispatch(deleteTodo(todo))} className="btn btn-success">Completed</button>
          
            </div>
           </div>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default TodoList;
