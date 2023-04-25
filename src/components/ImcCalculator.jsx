import React, { useState } from 'react';

// ? Components
import FormImc from './FormImc';

// ? CSS
import '../styles/css/ImcCalculator.css';

// ? Images


const ImcCalculator = () => {

   const [showResult, setShowResult] = useState(false);
   const [result, setResult] = useState('');
   const [messageResult, setMessageResult] = useState('');
   const [inputValueWeight, setInputValueWeight] = useState('');
   const [inputValueHeight, setInputValueHeight] = useState('');

   function inputEmpty() {
      if (inputValueHeight === '' || inputValueWeight === '') {
         return false;
      }
   }

   function calculateIMC() {
      if (!inputEmpty()) {
         const resultImc = (Number(inputValueWeight) / (Number(inputValueHeight) * Number(inputValueHeight))).toFixed(2);
         setResult(resultImc);

         if (resultImc < 16.9) {
            setMessageResult('Muito abaixo do peso');
         } else if (resultImc < 18.4) {
            setMessageResult('Abaixo do peso');
         } else if (resultImc < 24.9) {
            setMessageResult('Peso ideal !!!');
         } else if (resultImc < 29.9) {
            setMessageResult('Acima do peso');
         } else if (resultImc < 34.9) {
            setMessageResult('Obesidade grau I');
         } else if (resultImc < 40) {
            setMessageResult('Obesidade grau II');
         } else if (resultImc >= 40) {
            setMessageResult('Obesidade grau III');
         }

         setShowResult(true);
      }
   }

   return (
      <div className="ImcCalculator">
         <h1>Welcome to the IMC Calculator</h1>
         <p>Find out if you're at your ideal weight!</p>
         <FormImc inputValueWeight={inputValueWeight} setInputValueWeight={setInputValueWeight} inputValueHeight={inputValueHeight} setInputValueHeight={setInputValueHeight} calculateIMC={calculateIMC} />

         {showResult &&
         <p className='result'>{result + ' - ' + messageResult}</p>}

      </div>
   );
};

export default ImcCalculator;
