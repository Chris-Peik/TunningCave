import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const GoToLandingButton = () => {
  const navigate = useNavigate();
  return (
    <Button variant="contained" color="primary" onClick={() => navigate('/landing')}>Ir a Landing</Button>
  );
};

export default GoToLandingButton;
