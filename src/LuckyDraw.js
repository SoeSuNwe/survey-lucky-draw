import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinningWheel = styled.div`
  width: 100px;
  height: 100px;
  background-color: lightblue;
  border-radius: 50%;
  margin: 20px auto;
  animation: ${(props) => (props.isSpinning ? spin : 'none')} 4s ease-out;
`;

function LuckyDraw({ isSurveyCompleted }) {
  const [isSpinning, setSpinning] = useState(false);
  const [result, setResult] = useState('');

  const handleSpin = () => {
    if (isSurveyCompleted) {
      // Simulate spinning wheel
      setSpinning(true);

      // Simulate a random result after the spin
      setTimeout(() => {
        const results = ['Congratulations! You won a prize!', 'Better luck next time!'];
        const randomResult = results[Math.floor(Math.random() * results.length)];
        setResult(randomResult);
        setSpinning(false);
      }, 4000);
    } else {
      alert('Please complete the survey first.');
    }
  };

  return (
    <div>
      <h1>Lucky Draw</h1>
      <button onClick={handleSpin}>Start Spin</button>
      <SpinningWheel isSpinning={isSpinning} />
      <p>{result}</p>
    </div>
  );
}

export default LuckyDraw;
