import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box mt={4} p={2} textAlign="center" bgcolor="grey.100">
      <Typography variant="body2">© 2024 Medical Hub. All rights reserved.</Typography>
      <Box mt={1}>
        <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>Privacy Policy</Link>
        <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>Terms of Service</Link>
      </Box>
    </Box>
  );
};

export default Footer;
