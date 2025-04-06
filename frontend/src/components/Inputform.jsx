import * as React from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';

export default function BoxSx() {
    return (
        <Container maxWidth="sm">
            <Box
                component="form"
                sx={{
                    mt: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    p: 3,
                    boxShadow: 3,
                    borderRadius: 2,
                }}
            >
                <Typography variant="h5" align="center" gutterBottom>
                    Sign Up
                </Typography>

                <TextField
                    label="Name"
                    variant="outlined"
                    name="name"
                    required
                />

                <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    name="email"
                    required
                />

                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    name="password"
                    required
                />

                <Button variant="contained" type="submit">
                    Submit
                </Button>
            </Box>
        </Container>
    );
}
