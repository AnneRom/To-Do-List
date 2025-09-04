import { useState } from 'react'
import './App.css'
import { Header} from './components/Header'
import { TaskList} from './components/Header'

function App() {

  return (
    <>
      <Header />
      <TaskList />
    </>
  )
}

export default App
