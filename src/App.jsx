// import { useState } from 'react'
import './App.scss'
import LanguageSelector from './components/ui/LanguageSelector'
import AppRouter from './router/AppRouter.jsx'

function App() {

  return (
    <>
      <LanguageSelector />
      <AppRouter />  
    </>
  )
}

export default App
