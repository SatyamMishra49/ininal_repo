import { TextField } from '@mui/material';

function InputFlds() {
    return (
        <div>
            <TextField
                fullWidth
                required
                id="outlined-required"
                label="Required"
                defaultValue="Name"
            />
        </div>
    );
}

export default InputFlds;
