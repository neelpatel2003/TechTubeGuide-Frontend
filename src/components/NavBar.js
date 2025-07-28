
import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function NavBar() {
  return (
    <AppBar position="sticky" sx={{ background: '#20232a', boxShadow: 2 }}>
      <Toolbar sx={{ maxWidth: 1400, width: '100%', mx: 'auto', display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '2.1rem', marginRight: '0.8rem', lineHeight: 1, color: '#00bfae' }}>📺</span>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#00bfae', letterSpacing: 1.5 }}>
            TechTubeGuide
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Placeholder for user avatar, settings, etc. */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

