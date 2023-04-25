import React from 'react';

// ? Components
import ImcCalculator from '../components/ImcCalculator';

// ? CSS
import '../styles/css/Home.css';

// ? Images
import illustration from '../assets/img/undraw_indoor_bike_pwa4.svg'

const Home = (props) => {
   return (
      <div className='Home'>
         <img src={illustration} alt="illustration" />
         <ImcCalculator />
      </div>
   )
}

export default Home;