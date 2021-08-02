import React, { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'
import Score from './components/Score'
import './index.css'


const App = () => {

    const [ counter, setCounter ] = useState(0)

  return (
    <div className='container'>
      <Header />
      <Button counter={counter} setCounter={setCounter}/>
      <Score counter={counter}/>
      <Footer />
    </div>
  );
}

export default App;
