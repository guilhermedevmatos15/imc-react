import React from 'react';

// ? Components

// ? CSS
import '../styles/css/FormImc.css';

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
            <label>
               <span>Enter your weight (KG)</span>
               <input 
                  type="number"
                  onChange={(e) => {setInputValueWeight(e.target.value)}}
                  value={inputValueWeight}   
               />
            </label>
         </div>
         <div>
            <label>
               <span>Enter your height (Meters)</span>
               <input 
                  type="number"
                  onChange={(e) => {setInputValueHeight(e.target.value)}}
                  value={inputValueHeight}   
               />
            </label>
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
