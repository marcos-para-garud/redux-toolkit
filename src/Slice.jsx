import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : 
    [{
    id:1,
    todo: "Redux toolkit",
    completed: false
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo : (state , action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }

            state.todos.push(todo)
        },
        removeTodo : (state , action)=>{
            state.todos = state.todos.filter((todo)=>(
                todo.id!==action.payload
            ))
        },
        updateTodo : (state , action)=>{
            

            const {id , newText} = action.payload
            const todo = state.todos.find((todo)=> todo.id===id)
            if(todo)
            {
                todo.text = newText
            }
        },
        toggleComplete : (state , action)=>{
            const id = action.payload
            const todo = state.todos.find((todo)=>(todo.id===id))
            if (todo) {
                todo.completed = !todo.completed; // Toggle the completed state
              }
        }
    }
})

export const {addTodo , removeTodo , toggleComplete} = todoSlice.actions

export default todoSlice.reducer