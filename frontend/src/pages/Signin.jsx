import { Container } from '@mui/material';
import { Box, Typography } from '@mui/material';
import Btns from '../components/Button';
import InputFlds from '../components/Inputbox';
import Heading from '../components/Heading';

function SignIn() {
    return (
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
                <Heading />

                <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
                    Log In
                </Typography>

                <InputFlds />
                <InputFlds />
                <Btns />
            </Box>
        </Container>
    );
}

export default SignIn;
