import { useState } from 'react'
import './App.css'
import AddTodo from './components/Form'
import Todos from './components/TodoList'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  

  return (
    <>
    <Provider store={store}>
     <AddTodo/>
     <Todos/>
     </Provider>
    </>
  )
}

export default App
