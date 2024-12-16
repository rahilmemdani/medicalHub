import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Button,
} from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import PeopleIcon from '@mui/icons-material/People';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';

const MedicalHubDetails: React.FC = () => {
  const { id } = useParams(); // Fetch hub ID from the URL

  // Mock details for now
  const hub = {
    id,
    name: 'LifeCare Hospital',
    area: 'Andheri',
    services: ['ICU', 'OPD', 'Ambulance', 'Cardiology', 'Neurology'],
    doctors: ['Dr. A. Sharma', 'Dr. B. Gupta', 'Dr. C. Patel'],
    facilities: ['24/7 Pharmacy', 'Emergency Services', 'Blood Bank', 'X-Ray Services'],
  };

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Logic for filtering services based on the search term
    const filteredServices = hub.services.filter(service =>
      service.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredServices;
  };

  return (
    <Box mt={4} p={2}>
      <Typography variant="h4" align="center" gutterBottom>
        {hub.name}
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        Area: {hub.area}
      </Typography>
      <Divider sx={{ mb: 2 }} />

      <TextField
        variant="outlined"
        label="Search Services"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>

      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Services Offered
              </Typography>
              <List>
                {handleSearch().length > 0 ? (
                  handleSearch().map((service, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <MedicalServicesIcon />
                      </ListItemIcon>
                      <ListItemText primary={service} />
                    </ListItem>
                  ))
                ) : (
                  <ListItem>
                    <ListItemText primary="No services found." />
                  </ListItem>
                )}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Doctors
              </Typography>
              <List>
                {hub.doctors.map((doctor, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary={doctor} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Facilities
              </Typography>
              <List>
                {hub.facilities.map((facility, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <LocalPharmacyIcon />
                    </ListItemIcon>
                    <ListItemText primary={facility} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MedicalHubDetails;
