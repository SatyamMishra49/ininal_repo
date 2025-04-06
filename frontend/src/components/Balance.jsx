import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Balance() {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography
                    gutterBottom
                    sx={{ color: 'text.secondary', fontSize: 14 }}
                >
                    Word of the Day
                </Typography>
            </CardContent>
        </Card>
    );
}
