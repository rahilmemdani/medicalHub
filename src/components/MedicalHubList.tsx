import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';

const MedicalHubList: React.FC = () => {
  const hubs = [
    { name: 'LifeCare Hospital', area: 'Andheri', services: ['ICU', 'OPD'] },
    { name: 'CityCare Clinic', area: 'Bandra', services: ['Dialysis', 'Ambulance'] },
  ];

  return (
    <Box mt={4}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Available Medical Hubs
      </Typography>
      {/* <Grid container spacing={2}>
        {hubs.map((hub, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{hub.name}</Typography>
                <Typography variant="body1">Area: {hub.area}</Typography>
                <Typography variant="body2">Services: {hub.services.join(', ')}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid> */}
      <Grid container spacing={2} mt={4}>
        {hubs.map((hub, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{hub.name}</Typography>
                <Typography variant="body1">Area: {hub.area}</Typography>
                <Typography variant="body2">Services: {hub.services.join(', ')}</Typography>
              </CardContent>
            </Card>
          </Grid>
  ))}
</Grid>
    </Box>
  );
};

export default MedicalHubList;
