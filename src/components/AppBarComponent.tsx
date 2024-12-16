import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AppBarComponent: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" alignItems="center" gap={2} flexGrow={1}>
          <img
            src="https://via.placeholder.com/40"
            alt="Medical Hub Logo"
            style={{ borderRadius: '50%' }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Medical Hub
          </Typography>
        </Box>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/medical-hubs">
          Hubs
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
