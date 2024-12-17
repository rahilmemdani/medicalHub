import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const testimonialsData = [
  {
    name: 'John Doe',
    feedback: 'Great service and friendly staff!',
  },
  {
    name: 'Jane Smith',
    feedback: 'I had a wonderful experience. Highly recommend!',
  },
  // Add more testimonials as needed
];

const Testimonials: React.FC = () => {
  return (
    <Box mt={4}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Patient Testimonials
      </Typography>
      <Grid container spacing={2}>
        {testimonialsData.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box border={1} borderRadius={2} padding={2} bgcolor="grey.100">
              <Typography variant="h6">{testimonial.name}</Typography>
              <Typography variant="body1">{testimonial.feedback}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
