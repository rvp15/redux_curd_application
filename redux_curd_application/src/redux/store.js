import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './todoSlice'

//exporting store helps to use state in our application, pass reducers inside the store functions
export default configureStore({
    reducer:{
   todos: todoReducer,
    }
})