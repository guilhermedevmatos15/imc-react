import React from 'react';

// ? Components
import ImcCalculator from '../components/ImcCalculator';

// ? CSS
import '../styles/css/Home.css';

// ? Images


const Home = (props) => {
   return (
      <div className='Home'>
         <ImcCalculator />
      </div>
   )
}

export default Home;