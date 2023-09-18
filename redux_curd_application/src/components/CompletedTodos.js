import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';

const CompletedTodos = () => {

    const todos = useSelector((state)=>state.todos)
    console.log(todos)
    const completedTodos = todos.filter((item) => item.complete === true )
    console.log(completedTodos)
  
  return (
    <div>
      <h2>CompletedTodos</h2>
     <ul>
      {completedTodos.map((x)=> (
        <li>
          <span>{x.title}</span>
        </li>
      ))}
     </ul>
    </div>
  )
}

export default CompletedTodos
