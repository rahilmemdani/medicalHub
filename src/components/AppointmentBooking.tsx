import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const AppointmentBooking: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your API call here to submit the appointment
    console.log({ name, email, service, date });
    // Reset fields after submission
    setName('');
    setEmail('');
    setService('');
    setDate('');
  };

  return (
    <Box mt={4}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Book an Appointment
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Service"
          variant="outlined"
          value={service}
          onChange={(e) => setService(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Preferred Date"
          variant="outlined"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Book Appointment
        </Button>
      </form>
    </Box>
  );
};

export default AppointmentBooking;
