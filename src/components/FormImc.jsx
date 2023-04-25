import React from 'react';

// ? Components

// ? CSS
import '../styles/css/FormImc.css';

// ? Icons
import { FaWeightHanging } from "react-icons/fa";
import { FaRuler } from "react-icons/fa";

// ? Images

const FormImc = (props) => {
   const {
      inputValueWeight,
      setInputValueWeight,
      inputValueHeight,
      setInputValueHeight,
      calculateIMC,
   } = props;

   return (
      <form className="FormImc">
         <div>
            <label htmlFor='input-weight'>Enter your weight</label>
            <div className='input-field'>
               <FaWeightHanging />
               <input
                  type="number"
                  name='input-weight'
                  id='input-weight'
                  onChange={(e) => {setInputValueWeight(e.target.value)}}
                  value={inputValueWeight}
               />
               <span className='marcation'>Kg</span>
            </div>
         </div>
         <div>
         <label htmlFor='input-height'>Enter your height</label>
            <div className='input-field'>
               <FaRuler />
               <input
                  type="number"
                  name='input-height'
                  id='input-height'
                  onChange={(e) => {setInputValueHeight(e.target.value)}}
                  value={inputValueHeight}
               />
               <span className='marcation'>M</span>
            </div>
         </div>
         <button 
            type="button"
            className="calculate"
            onClick={(e) => {calculateIMC()}}
         >
            Calculate
         </button>
      </form>
   );
};

export default FormImc;
