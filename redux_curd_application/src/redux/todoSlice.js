//Slice is where you define reducers and actions for each state , you can create many n number of slice for each state (todos, users...)

import { createSlice } from "@reduxjs/toolkit";
//inside slice u have 3 thing:name, initalstate,reducers
const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
      };
      // now add new todo to the current state:
      state.push(newTodo);      
    },
    deleteTodo: (state, action) => {
       return state.filter((todo) => todo.id !== action.payload.id)
    },
  },
});

// export the reducers as the operation is done based on their actions(todoSlice has bunch of actions)
export const { addTodo, deleteTodo } = todoSlice.actions;

// You need to export this add the reducer in store
export default todoSlice.reducer;
