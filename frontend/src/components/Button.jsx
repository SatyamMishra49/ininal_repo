import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function Btns() {
    return (
        <Button variant="contained" endIcon={<SendIcon />}>
            SUBMIT
        </Button>
    );
}

export default Btns;
