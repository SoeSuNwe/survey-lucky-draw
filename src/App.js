import "./App.css";

import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './components/Home';
import IconButton from '@mui/material/IconButton';
import LuckyDraw from './components/LuckyDraw';
import MenuIcon from '@mui/icons-material/Menu';
import { NavigationButton } from "./NavigationButton";
import Survey from './components/Survey';

function App() {
  const [isSurveyCompleted, setSurveyCompleted] = useState(false);

  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Survey App
            </Typography>
            <NavigationButton to="/" text="Home" />
            <NavigationButton to="/survey" text="Survey" />
            <NavigationButton to="/lucky-draw" text="Lucky Draw" />
          </Toolbar>
        </AppBar>

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
      </Box>
    </Router>
  );
}

export default App;
