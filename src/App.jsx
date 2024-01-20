import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import { General } from './components/General'
import { Education } from './components/Education'
import { Experience } from './components/Experience'

function App() {

  return (
    <>
    <General />
    <Education />
    <Experience />
    </>
  )
}

export default App
