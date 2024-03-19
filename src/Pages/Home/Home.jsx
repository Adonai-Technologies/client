import React from 'react';
import Header from '../../Components/Header';
import Intro from './Intro';
import About from './About';
import Experiences from './Experiences';

function Home() {
  return (
    
    <div className='bg-primary px-40 sm:px-3'>
      <Header/>
      <div>
        <Intro/>
        <About/>
        <Experiences/>
      </div>
    </div>
  );
}

export default Home;
