import React from 'react';
import FixedLeft from './components/fixed-left';
import Navbar from './components/navbar';
import Hero from './components/hero'
import Footer from './components/footer'
import FixedRight from './components/fixed-right';

const App = () => {
  return (
    <div>
      <FixedLeft />
      <FixedRight />
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}

export default App;