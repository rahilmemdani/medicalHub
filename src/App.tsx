import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box, useMediaQuery, ThemeProvider, createTheme, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchFiltersAndHubList from './components/SearchFiltersAndHubList.tsx'; 
import Footer from './components/Footer.tsx';
import Testimonials from './components/Testimonials.tsx';
import AppointmentBooking from './components/AppointmentBooking.tsx'; 
import LandingPage from './components/LandingPage.tsx'; 

const theme = createTheme();

const App: React.FC = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <Box sx={{ width: 250 }} onClick={toggleDrawer} onKeyDown={toggleDrawer}>
      <Button color="inherit" component={Link} to="/" fullWidth>
        Home
      </Button>
      <Button color="inherit" component={Link} to="/medical-hubs" fullWidth>
        Hubs
      </Button>
      {/* Uncomment if needed */}
      {/* <Button color="inherit" component={Link} to="/testimonials" fullWidth>
        Testimonials
      </Button> */}
      <Button color="inherit" component={Link} to="/appointment" fullWidth>
        Book Appointment
      </Button>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Medical Hub
            </Typography>
            {isSmallScreen ? (
              <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex' }}>
                <Button color="inherit" component={Link} to="/" sx={{ mr: 2 }}>
                  Home
                </Button>
                <Button color="inherit" component={Link} to="/medical-hubs" sx={{ mr: 2 }}>
                  Hubs
                </Button>
                {/* Uncomment if needed */}
                {/* <Button color="inherit" component={Link} to="/testimonials" sx={{ mr: 2 }}>
                  Testimonials
                </Button> */}
                <Button color="inherit" component={Link} to="/appointment" sx={{ mr: 2 }}>
                  Book Appointment
                </Button>
              </Box>
            )}
          </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
          {drawerContent}
        </Drawer>
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<LandingPage />} /> 
            <Route path="/medical-hubs" element={<SearchFiltersAndHubList />} /> 
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/appointment" element={<AppointmentBooking />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
