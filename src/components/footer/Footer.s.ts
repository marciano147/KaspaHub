import { Box, Link, Typography, styled } from '@mui/material';

export const FooterContainer = styled(Box)({
    display: 'flex',
    alignItems: 'flex-start',
    padding: '20px',
    borderTop: '1px solid #ddd',
    columnGap: '6vw',
});

export const FooterColumn = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
});

export const FooterLink = styled(Link)({
    margin: '5px 0',
    textDecoration: 'none',

    fontSize: '0.8vw',
});

export const Text = styled(Typography)({
    fontSize: '1vw',
});
