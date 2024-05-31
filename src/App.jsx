import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineCards  from './components/HandlineCards';
import Food from './components/Food';
import Category from './components/Categorry';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <Food/>
      <Category/>
    </div>
  )
}

export default App
