import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, MenuItem, Typography, Paper, Card, CardContent, CardActions, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

interface Hospital {
  name: string;
  location: string;
  contact: string;
  services: string[]; // Add services array
}

const SearchFilters: React.FC = () => {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [pincode, setPincode] = useState('');
  const [searchResults, setSearchResults] = useState<Hospital[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);

  const stateData = {
    Maharashtra: {
      Mumbai: ['Andheri', 'Bandra'],
      Pune: ['Shivajinagar', 'Wakad'],
    },
    Karnataka: {
      Bangalore: ['Koramangala', 'Whitefield'],
      Mysore: ['Nazarbad', 'VV Mohalla'],
    },
  };

  const [cities, setCities] = useState<string[]>([]);
  const [areas, setAreas] = useState<string[]>([]);

  useEffect(() => {
    if (state) {
      setCities(Object.keys(stateData[state]));
      resetFields();
    } else {
      setCities([]);
      resetFields();
    }
  }, [state]);

  useEffect(() => {
    if (city && state) {
      setAreas(stateData[state][city] || []);
      resetFields('area', 'pincode');
    } else {
      setAreas([]);
      resetFields('area', 'pincode');
    }
  }, [city, state]);

  const resetFields = (...fields: string[]) => {
    if (fields.includes('city')) setCity('');
    if (fields.includes('area')) setArea('');
    if (fields.includes('pincode')) setPincode('');
  };

  const handleSearch = () => {
    if (!/^\d{6}$/.test(pincode)) {
      alert('Pincode must be 6 digits.');
      return;
    }

    // Simulated search data options based on the selected filters
    const results: Hospital[] = [
      { name: 'Hospital A', location: `${area}, ${city}`, contact: '123-456-7890', services: ['Emergency', 'Surgery', 'Cardiology'] },
      { name: 'Hospital B', location: `${area}, ${city}`, contact: '987-654-3210', services: ['Pediatrics', 'Neurology', 'Orthopedics'] },
    ];
    setSearchResults(results);
  };

  const handleOpenDialog = (hospital: Hospital) => {
    setSelectedHospital(hospital);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedHospital(null);
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Find Medical Services
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          select
          label="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
          variant="outlined"
          fullWidth
        >
          {Object.keys(stateData).map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          variant="outlined"
          fullWidth
          disabled={!cities.length}
        >
          {cities.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          variant="outlined"
          fullWidth
          disabled={!areas.length}
        >
          {areas.map((area) => (
            <MenuItem key={area} value={area}>
              {area}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value.replace(/[^0-9]/g, '').slice(0, 6))}
          inputProps={{ maxLength: 6, autoComplete: 'off' }}
          variant="outlined"
          error={!/^\d{6}$/.test(pincode) && pincode.length > 0}
          helperText={!/^\d{6}$/.test(pincode) && pincode.length > 0 ? 'Pincode must be 6 digits.' : ''}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleSearch} fullWidth>
          Search
        </Button>
      </Box>

      <Box mt={2}>
        <Typography variant="h6" gutterBottom>
          Search Results:
        </Typography>
        <Box display="flex" flexDirection="column" gap={2}>
          {searchResults.length > 0 ? (
            searchResults.map((result, index) => (
              <Card key={index} sx={{ backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                <CardContent>
                  <Typography variant="h6">{result.name}</Typography>
                  <Typography color="textSecondary">{result.location}</Typography>
                  <Typography color="textSecondary">Contact: {result.contact}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => handleOpenDialog(result)}>View Details</Button>
                </CardActions>
              </Card>
            ))
          ) : (
            <Typography>No results found.</Typography>
          )}
        </Box>
      </Box>

      {/* Dialog for hospital details */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{selectedHospital?.name}</DialogTitle>
        <DialogContent>
          {selectedHospital && (
            <>
              <Typography variant="body1">
                Location: {selectedHospital.location}
              </Typography>
              <Typography variant="body1">
                Contact: {selectedHospital.contact}
              </Typography>
              <Typography variant="h6" mt={2}>Services Offered:</Typography>
              <ul>
                {selectedHospital.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default SearchFilters;
