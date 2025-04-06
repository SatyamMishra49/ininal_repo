import { Container } from '@mui/material';
import { Box, Typography, FormControl } from '@mui/material';
import Btns from '../components/Button';
import AuthIcon from '../assets/bitwarden.svg';
import InputFlds from '../components/Inputfields';

import HeadIcon from '../assets/ininal.svg';

function SignUp() {
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
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        mb: 2,
                        gap: 1,
                    }}
                >
                    <img
                        src={HeadIcon}
                        alt=""
                        style={{ width: 50, height: 50 }}
                    ></img>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        mb: 2,
                        gap: 1,
                    }}
                >
                    <img
                        src={AuthIcon}
                        alt="Logo"
                        style={{ width: 40, height: 40 }}
                    />
                    <Typography variant="h6" fontWeight="bold">
                        Signup
                    </Typography>
                </Box>
                <InputFlds />
                <InputFlds />
                <Btns></Btns>
            </Box>
        </Container>
    );
}

export default SignUp;
