import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Btns from '../components/Button';
import InputFlds from '../components/Inputbox';
import Logo from '../assets/CashApp.svg';

function SignIn() {
    return (
        <div className="w-screen h-screen flex">
            <div
                className="w-1/2 p-4 flex items-center justify-center"
                style={{ backgroundColor: 'oklch(96.7% 0.067 122.328)' }}
            >
                <img src={Logo} alt="Logo" className="w-40 h-auto" />
            </div>
            <div className="w-1/2 p-4">
                <Container
                    maxWidth="xs"
                    sx={{
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        component="form"
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1.5,
                            px: 3,
                            py: 2,
                            boxShadow: 3,
                            borderRadius: 2,
                            backgroundColor: '#fff',
                        }}
                    >
                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            sx={{ mb: 1 }}
                        >
                            Log In
                        </Typography>

                        <InputFlds />
                        <InputFlds />
                        <Btns />
                    </Box>
                </Container>
            </div>
        </div>
    );
}

export default SignIn;
