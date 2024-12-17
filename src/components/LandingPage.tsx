import React from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
    return (
        <Box sx={{ padding: { xs: 2, md: 4 }, textAlign: 'center' }}>
            {/* Hero Section */}
            <Box
                sx={{
                    position: 'relative',
                    color: '#ffffff',
                    padding: { xs: '60px 0', md: '140px 0' },
                    borderRadius: '8px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.7)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                }}
            >
                {/* Background Image */}
                <Box
                    component="img"
                    src="https://st4.depositphotos.com/19581100/30269/i/450/depositphotos_302698580-stock-photo-medical-stethoscope-on-a-blue.jpg"
                    alt="Health Background"
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.3,
                        zIndex: 1,
                    }}
                />
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                    <Typography
                        variant="h5"
                        sx={{
                            marginTop: 2,
                            color: 'darkgray',
                            fontStyle: 'italic',
                            maxWidth: '600px',
                            padding: '0 20px',
                            fontSize: { xs: '1.2rem', md: '1.5rem' },
                        }}
                    >
                        Delivering compassionate care and innovative solutions for your health needs.
                    </Typography>
                    <Box sx={{ marginTop: 3, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', gap: { xs: 1, sm: 4 } }}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small" // Base size for small buttons
                            component={Link}
                            to="/medical-hubs"
                            sx={{ padding: { xs: '4px 8px', sm: '8px 16px' }, borderRadius: '8px' }} // Smaller padding on xs
                        >
                            Explore Services
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            size="small" // Base size for small buttons
                            component={Link}
                            to="/appointment"
                            sx={{ padding: { xs: '4px 8px', sm: '8px 16px' }, borderRadius: '8px' }} // Smaller padding on xs
                        >
                            Schedule an Appointment
                        </Button>
                    </Box>
                </Box>
            </Box>

            {/* About Us Section */}
            <Box sx={{ marginTop: 4, padding: { xs: 2, md: 3 }, backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                    About Us
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.6, color: '#333' }}>
                    At Medical Hub, we are dedicated to connecting you with essential healthcare services. Our experienced team is committed to ensuring that you receive the best care possible.
                </Typography>
            </Box>

            {/* Service Highlights */}
            <Box sx={{ marginTop: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Our Services
                </Typography>
                <Grid container spacing={2}>
                    {[
                        { title: 'ICU', description: 'Comprehensive intensive care services.', imgUrl: 'https://cdn-icons-png.flaticon.com/128/17774/17774403.png' },
                        { title: 'Dialysis', description: 'State-of-the-art dialysis treatments.', imgUrl: 'https://cdn-icons-png.flaticon.com/512/4246/4246559.png' },
                        { title: 'Emergency', description: '24/7 emergency services available.', imgUrl: 'https://cdn-icons-png.flaticon.com/128/10468/10468285.png' },
                        { title: 'Ambulance', description: 'Quick response ambulance services.', imgUrl: 'https://cdn-icons-png.flaticon.com/128/12349/12349613.png' },
                    ].map((service) => (
                        <Grid item xs={12} sm={6} md={3} key={service.title}>
                            <Paper elevation={3} sx={{ padding: 2, textAlign: 'center', borderRadius: '8px', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
                                <img src={service.imgUrl} alt={service.title} style={{ width: '60%', margin: '0 auto', display: 'block' }} />
                                <Typography variant="h6" sx={{ marginTop: 2, fontWeight: 'bold', color: '#333' }}>{service.title}</Typography>
                                <Typography variant="body2" sx={{ marginBottom: 1, color: '#555' }}>{service.description}</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Testimonials Section */}
            <Box sx={{ marginTop: 4, padding: { xs: 2, md: 3 }, backgroundColor: '#f0f0f0', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                    What Our Patients Say
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.6, color: '#333' }}>
                    "The care I received at Medical Hub was exceptional. The staff went above and beyond to ensure my comfort."
                </Typography>
                <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#777' }}>
                    - John Doe
                </Typography>
            </Box>

            {/* Call to Action */}
            <Box sx={{ marginTop: 4 }}>
                <Button variant="contained" color="primary" size="large" component={Link} to="/medical-hubs" sx={{ padding: { xs: '10px 20px', md: '12px 24px' }, fontWeight: 'bold', borderRadius: '8px' }}>
                    Find a Hub Near You
                </Button>
            </Box>
        </Box>
    );
};

export default LandingPage;
