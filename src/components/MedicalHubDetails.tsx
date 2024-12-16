import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Card, CardContent } from '@mui/material';

const MedicalHubDetails: React.FC = () => {
  const { id } = useParams(); // Fetch hub ID from the URL

  // Mock details for now
  const hub = {
    id,
    name: 'LifeCare Hospital',
    area: 'Andheri',
    services: ['ICU', 'OPD', 'Ambulance'],
    doctors: ['Dr. A. Sharma', 'Dr. B. Gupta'],
    facilities: ['24/7 Pharmacy', 'Emergency Services', 'Blood Bank'],
  };

  return (
    <Box mt={4} p={2}>
      <Typography variant="h4">{hub.name}</Typography>
      <Typography variant="subtitle1">Area: {hub.area}</Typography>
      <Typography variant="h6" mt={2}>Services:</Typography>
      <Typography>{hub.services.join(', ')}</Typography>
      <Typography variant="h6" mt={2}>Doctors:</Typography>
      <Typography>{hub.doctors.join(', ')}</Typography>
      <Typography variant="h6" mt={2}>Facilities:</Typography>
      <Typography>{hub.facilities.join(', ')}</Typography>
    </Box>
  );
};

export default MedicalHubDetails;
