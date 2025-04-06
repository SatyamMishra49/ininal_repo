import * as React from 'react';
import { Box, Typography, Link } from '@mui/material';
import logo from '../assets/ininal.svg';

function Heading() {
    return (
        <Box
            sx={{
                height: '100vh',
                width: '100%',
                maxWidth: 600, // limit width for left side
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: 4,
                backgroundColor: '#ffffff',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 4,
                }}
            >
                <img src={logo} alt="Logo" style={{ width: 32, height: 32 }} />
            </Box>

            <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
                Hello There!
            </Typography>

            <Typography
                variant="body1"
                sx={{ color: 'text.secondary', maxWidth: 300 }}
            >
                Secure and fast shopping card that is valid everywhere, has chip
                and contactless options.
            </Typography>
        </Box>
    );
}

export default Heading;
