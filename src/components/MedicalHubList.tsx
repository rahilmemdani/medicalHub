import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Grid, Button, TextField } from '@mui/material';

const MedicalHubList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const hubs = [
    { name: 'LifeCare Hospital', area: 'Andheri', services: ['ICU', 'OPD'] },
    { name: 'CityCare Clinic', area: 'Bandra', services: ['Dialysis', 'Ambulance'] },
    { name: 'HealthPlus Center', area: 'Dadar', services: ['Surgery', 'ICU'] },
    { name: 'CareWell Clinic', area: 'Juhu', services: ['Ambulance', 'Emergency'] },
    { name: 'MediHelp Hospital', area: 'Versova', services: ['Pediatrics', 'Dialysis'] },
  ];

  const filteredHubs = hubs.filter(hub =>
    hub.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Box mt={4} p={2}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Available Medical Hubs
      </Typography>
      <TextField
        variant="outlined"
        label="Search by Service"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Grid container spacing={2}>
        {filteredHubs.length > 0 ? (
          filteredHubs.map((hub, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {hub.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Area: {hub.area}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Services: {hub.services.join(', ')}
                  </Typography>
                  <Button variant="contained" color="primary" fullWidth>
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ width: '100%' }}>
            No results found.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default MedicalHubList;
