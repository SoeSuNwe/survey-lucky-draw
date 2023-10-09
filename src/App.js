import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React, { useState } from 'react';

import LuckyDraw from './LuckyDraw';
import Survey from './Survey';

function App() {
  const [isSurveyCompleted, setSurveyCompleted] = useState(false);

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/survey">Survey</Link>
            </li>
            <li>
              <Link to="/lucky-draw">Lucky Draw</Link>
            </li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/survey"
            element={<Survey onSurveyComplete={() => setSurveyCompleted(true)} />}
          />
          <Route
            path="/lucky-draw"
            element={<LuckyDraw isSurveyCompleted={isSurveyCompleted} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <div>Home Page</div>;
}

export default App;
