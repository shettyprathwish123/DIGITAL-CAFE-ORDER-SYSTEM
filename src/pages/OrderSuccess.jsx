import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#F5F5DC"
    >
      <Typography variant="h3" gutterBottom>
        🎉 Order Placed Successfully!
      </Typography>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Thank you for your purchase. Your order is being processed.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/')}
        sx={{ mt: 2 }}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default OrderSuccess;