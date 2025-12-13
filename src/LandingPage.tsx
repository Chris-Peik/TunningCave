
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';


const HeroParallax = () => {
    const ref = useRef(null);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const navigate = useNavigate();

    return (
        <Box
            ref={ref}
            sx={{
                minHeight: '100dvh',
                minWidth: '100vw',
                width: '100vw',
                height: '100dvh',
                overflow: 'hidden',
                position: 'fixed',
                top: 0,
                left: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(120deg, #1e3c72 0%, #2a5298 100%)',
            }}
        >
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100dvh',
                    zIndex: 1,
                    overflow: 'hidden',
                    pointerEvents: 'none',
                    y,
                }}
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        width: '100vw',
                        height: '100dvh',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}
                >
                    <source src="/videos/hero-bg.webm" type="video/webm" />
                    <source src="/videos/hero-bg.mp4" type="video/mp4" />
                    <source src="/videos/hero-bg.ogv" type="video/ogg" />
                    Tu navegador no soporta video HTML5.
                </video>
            </motion.div>
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center',
                    color: 'white',
                    width: '100%',
                }}
            >
                <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                    Bienvenido a TunningCave
                </Typography>
                <Typography variant="h5" gutterBottom>
                    La mejor comunidad para los amantes del tuning automotriz
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    sx={{ mt: 4 }}
                    onClick={() => navigate('/')}
                >
                    Volver al inicio
                </Button>
            </Box>
        </Box>
    );
};

export default HeroParallax;
