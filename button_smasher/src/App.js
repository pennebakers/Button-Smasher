import React, { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'
import TimeClock from './components/TimeClock'
import Score from './components/Score'
import './index.css'


const App = () => {

    const [ counter, setCounter ] = useState(0)
    const [ timer, setTimer ] = useState(30000)

  return (
    <div className='container'>
      <Header />
      <TimeClock timer={timer} setTimer={setTimer}/>
      <Button counter={counter} setCounter={setCounter}/>
      <Score counter={counter}/>
      <Footer />
    </div>
  );
}

export default App;
