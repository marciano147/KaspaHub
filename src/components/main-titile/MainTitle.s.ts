import { Typography, styled } from '@mui/material';

export const TitleContainer = styled('div')({
    textAlign: 'center',
    height: '22vh',
    border: 0,
});

export const MainHeading = styled(Typography)({
    fontSize: '3vw',
    fontWeight: 'bold',
});

export const SubHeading = styled(Typography)({
    fontSize: '1.5vw',
    margin: '10px 0',
});
