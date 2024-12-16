// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { CssBaseline } from '@mui/material';
// import AppBarComponent from './components/AppBarComponent.tsx';
// import SearchFilters from './components/SearchFilters.tsx';
// import MedicalHubList from './components/MedicalHubList.tsx';

// const App: React.FC = () => {
//   return (
//     <Router>
//       <CssBaseline />
//       <AppBarComponent />
//       <Routes>
//         <Route path="/" element={<SearchFilters />} />
//         <Route path="/medical-hubs" element={<MedicalHubList />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import SearchFilters from './components/SearchFilters.tsx';
import MedicalHubList from './components/MedicalHubList.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Medical Hub
          </Typography>
          <Box>
            <Button color="inherit" component={Link} to="/">
              Search
            </Button>
            <Button color="inherit" component={Link} to="/medical-hubs">
              Hubs
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<SearchFilters />} />
          <Route path="/medical-hubs" element={<MedicalHubList />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
