import React from 'react'
import Header from './Components/Header'
import About from './Components/About'
import Home from './Components/Home'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Projectz from './Components/Projectz'
import Skills from './Components/Skills'

const App = () => {
  return (
    <div className='h-screen overflow-y-auto scrollbar1 pb-2 bg-lude-200'>
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Skills/>
      <Projectz/>
      <Contact/>
    </div>
  )
}

export default App
