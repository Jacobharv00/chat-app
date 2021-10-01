import FirstPerson from './components/FirstPerson'
import SecondPerson from './components/SecondPerson'
import Navbar from './components/Navbar'
import './app.css'
import React from 'react'

function App () {
  return (
    <>
      <Navbar />
      <FirstPerson />
      <SecondPerson />
    </>
  )
}

export default App
