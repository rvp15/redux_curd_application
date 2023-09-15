import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {configureStore} from "@reduxjs/toolkit"
// import { Provider } from 'react-redux'; 

// create a variable for the store, create a property called reducer(which contains all the reducers that we are going to use, create a folder called features and have all the reducers in there)
// const store = configureStore({
//   reducer:{
//    todos: todosReducers
//   }
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Pass the store that u have created above*/}
    
  <App/>
   
  </React.StrictMode>
);

