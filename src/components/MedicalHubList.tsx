import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Grid, TextField, Button } from '@mui/material';

const MedicalHubList: React.FC = () => {
  const [searchService, setSearchService] = useState('');
  
  const hubs = [
    { name: 'LifeCare Hospital', area: 'Andheri', services: ['ICU', 'OPD'] },
    { name: 'CityCare Clinic', area: 'Bandra', services: ['Dialysis', 'Ambulance'] },
    // Add more hubs as needed
  ];

  const filteredHubs = hubs.filter(hub => 
    hub.services.some(service => service.toLowerCase().includes(searchService.toLowerCase()))
  );

  return (
    <Box mt={4}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Available Medical Hubs
      </Typography>
      <TextField 
        variant="outlined"
        placeholder="Search by service"
        value={searchService}
        onChange={(e) => setSearchService(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Grid container spacing={2} mt={2}>
        {filteredHubs.length > 0 ? (
          filteredHubs.map((hub, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{hub.name}</Typography>
                  <Typography variant="body1">Area: {hub.area}</Typography>
                  <Typography variant="body2">Services: {hub.services.join(', ')}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography>No hubs found for the selected service.</Typography>
        )}
      </Grid>
    </Box>
  );
};

export default MedicalHubList;
