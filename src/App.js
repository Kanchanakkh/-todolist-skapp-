import React, {useContext} from 'react'
import TodoListForm from './components/todolistForm'
import Login from './components/login'
import './index.css'
import {MyContext} from './components/context/index'


const App = () => {
  
  const context = useContext(MyContext);

  
  return (
    <>
      <div className="container">
        <h1 >Let's get started with your lists</h1>
        {context.loggedIn ? (<TodoListForm />) : (<Login />)}
      </div>
    </>
  )
}

export default App
