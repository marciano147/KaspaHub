import { Box, Button, styled } from '@mui/material';

export const FilterContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    height: '10vh',
});

export const FilterButton = styled(Button)({
    fontSize: '2vh',
    margin: '0 10px',
    borderRadius: '50px', // Make buttons round
    padding: '10px 20px', // Add padding for a softer look
});
