import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';

function Review({ user, description }) {
   return (
      <Card sx={{ my: 2, borderRadius: 3, boxShadow: 2 }}>
         <CardContent>
            <Box display="flex" alignItems="center" gap={2} mb={1}>
               <Avatar>{user ? user[0].toUpperCase() : '?'}</Avatar>
               <Typography variant="h6" color="#fff">{user}</Typography>
            </Box>
            <Typography variant="body2" color="#bfc7d5">{description}</Typography>
         </CardContent>
      </Card>
   )
}

export default Review
