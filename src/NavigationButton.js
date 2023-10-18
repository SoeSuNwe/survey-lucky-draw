import { Button } from '@mui/material';
import React from 'react';

export function NavigationButton({ to, text}) {
  return (
    <Button variant="contained" href={to}> 
        {text} 
    </Button>
  );
}
