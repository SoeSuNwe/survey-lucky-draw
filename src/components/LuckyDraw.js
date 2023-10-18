import React from 'react';
import Spin from './Spin';

function LuckyDraw() {
  return (
    <div style={{ position: 'absolute' }}>
      <h1>LuckyDraw</h1>
      <div style={{ position: 'absolute' }}>
      <Spin />
      </div>
    </div>

  );
}

export default LuckyDraw;
