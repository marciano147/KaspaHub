import { Avatar, Link, Typography, styled } from '@mui/material';

export const CardContainer = styled('div')({
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '25vh',
    width: '30vw',
    margin: '8px',
    boxShadow: '0 0 10px 2px rgba(112, 199, 186, 0.8)',
});

export const LogoTitleContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '10px',
    marginRight: '0.5vw',
});

export const Logo = styled(Avatar)({
    height: '7vh',
    width: '7vh',
});

export const Title = styled(Typography)({
    fontSize: '18px',
    fontWeight: 'bold',
});

export const Description = styled(Typography)({
    fontSize: '14px',
    marginBottom: '10px',
});

export const LearnMoreLink = styled(Link)({
    fontSize: '14px',
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline',
    },
});
