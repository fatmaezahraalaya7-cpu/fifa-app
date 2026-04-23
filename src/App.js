import React from 'react'
import Nav from './components/Nav'
import './App.css' 
import'./components/Hero.css'
import Hero from './components/Hero'
import Time from './components/Time'
import './components/Time.css'

function App() {
  return (
    <div>
      <Nav/>
      <Hero/>
      {/* <Time/> */}
      <div className="time">
  <h2>
    NEXT ROUND IN:</h2><h1> 00</h1><h5>DAYS</h5><h1>06</h1> 
    <h5>H</h5> <h1>52</h1><h5>MIN</h5><h1>04</h1><h5>SEC</h5>
  
</div>
  
    </div>
  )
}

export default App
