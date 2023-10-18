import "./App.css";

import { AppBar, Box, Toolbar, Typography } from '@mui/material';

import AppRoutes from "./components/Routes";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavigationButton } from "./NavigationButton";
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {


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

        <div style={{ position: 'relative' }}>
          <AppRoutes />
        </div>


      </Box>
    </Router>
  );
}

export default App;
