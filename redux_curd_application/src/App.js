import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddNewTodo from './components/AddNewTodo';
import TodoList from './components/TodoList';

function App() {


  return (
    <div className="App bg-white p-4 mt-5">
     <h1 className='heading'>My Todo List</h1>
     <AddNewTodo/>
     <TodoList/>
    </div>
  );
}

export default App;
