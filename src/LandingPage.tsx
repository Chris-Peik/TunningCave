
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion, MotionValue, useSpring, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [0, distance]);
}



const HeroParallax = () => {
    const ref = useRef(null);
    const { scrollY } = useScroll();
    const y = useParallax(scrollY, 200);
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
                    disablePictureInPicture
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
                <motion.h2 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    style={{y}}>
                    Tunning Cave
                </motion.h2>
                <Typography variant="h5" gutterBottom>
                    Donde el Tunning y el detallado se convierten en Arte Automotriz
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
