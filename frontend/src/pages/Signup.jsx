import { Container } from '@mui/material';
import { Box, Typography, FormControl } from '@mui/material';
import Btns from '../components/Button';
import AuthIcon from '../assets/bitwarden.svg';
import InputFlds from '../components/Inputbox';

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
                        mb: 2,
                        gap: 1,
                    }}
                >
                    <img
                        src={HeadIcon}
                        alt=""
                        style={{ width: 60, height: 70 }}
                    ></img>
                    <br />
                </Box>
                <Typography variant="body-2" sx={{ mb: 3 }}>
                    Secure and fast shopping card that is valid everywhere, has
                    chip and contactless options.
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        mb: 2,
                        gap: 1,
                    }}
                >
                    <Typography variant="h4" fontWeight="bold">
                        Sign Up
                    </Typography>
                </Box>
                <InputFlds />
                <InputFlds />
                <InputFlds />
                <InputFlds />
                <Btns></Btns>
            </Box>
        </Container>
    );
}

export default SignUp;
