import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

// Array of images for the slider
const sliderImages = [
    'https://source.unsplash.com/featured/?hospital,healthcare1',
    'https://source.unsplash.com/featured/?hospital,healthcare2',
    'https://source.unsplash.com/featured/?hospital,healthcare3'
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};

const HeroSection: React.FC = () => {
    return (
        <Box sx={{ position: 'relative', height: '100vh' }}>
            <Slider {...settings}>
                {sliderImages.map((image, index) => (
                    <div key={index}>
                        <Box
                            sx={{
                                backgroundImage: `url(${image})`,
                                height: '100vh',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'relative',
                                color: '#ffffff',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.7)',
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    color: '#e0e0e0',
                                    fontStyle: 'italic',
                                    maxWidth: '600px',
                                    padding: '0 20px',
                                    textAlign: 'center',
                                }}
                            >
                                Delivering compassionate care and innovative solutions for your health needs.
                            </Typography>
                            <Box sx={{ marginTop: 3 }}>
                                <Button variant="contained" color="primary" size="large" component={Link} to="/medical-hubs" sx={{ marginRight: 2 }}>
                                    Explore Services
                                </Button>
                                <Button variant="outlined" color="secondary" size="large" component={Link} to="/appointment">
                                    Schedule an Appointment
                                </Button>
                            </Box>
                        </Box>
                    </div>
                ))}
            </Slider>
        </Box>
    );
};

export default HeroSection;
