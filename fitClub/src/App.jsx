import { useState } from 'react'

import './App.css'
import Hero from './component/Hero/Hero'
import Programs from './component/programs/Programs'
import Reasons from './component/Reasons/Reasons'

function App() {
 

  return (
    <>
      <div className='App'>
        <Hero/>
        <Programs/>
        <Reasons/>
      </div>
    </>
  )
}
 
export default App
