import React from "react";
// to use state from redux store use useSelector hook
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/todoSlice";


const TodoList = () => {

const dispatch = useDispatch()
  //useSelector function has a fun where state is passed and returns current state(of todos) from redux store
  const todos = useSelector((state) => state.todos);


  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li key={todo.id} className="list-item">
          <div className="d-flex align-items-center listitems">
            <span>{todo.title}</span>
            {/* <button className="btn btn-danger">Delete</button> */}
            <button onClick={()=> dispatch(deleteTodo(todo))} className="btn btn-success">Completed</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
