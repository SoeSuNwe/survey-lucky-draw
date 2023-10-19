import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home.js';
import LuckyDraw from './LuckyDraw.js';
import Survey from './Survey.js';
import UserForm from './Users/UserForm.js';

function AppRoutes() {
  const [isSurveyCompleted, setSurveyCompleted] = useState(false);
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="/survey"
      element={<Survey onSurveyComplete={() => setSurveyCompleted(true)} />} />
    <Route
      path="/lucky-draw"
      element={<LuckyDraw isSurveyCompleted={isSurveyCompleted} />} />
    <Route
      path="/users"
      element={<UserForm   />} />
  </Routes>;
}

export default AppRoutes;