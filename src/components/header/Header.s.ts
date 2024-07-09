import { Typography, styled } from '@mui/material';

export const HeaderContainer = styled('div')({
    margin: '0 auto',
    padding: '1vh 2vh',
    paddingTop: '0',
    borderBottom: '1px solid #ddd',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    columnGap: '10px',
    height: '7vh',
    position: 'sticky',
    zIndex: 1000,
    top: 0,
});

export const Logo = styled('img')({
    height: '5vw',
    marginRight: '20px',
    cursor: 'pointer',
});

export const InfoSection = styled(Typography)({
    display: 'flex',
    flexDirection: 'row',
    marginRight: '2vw',
});

export const PageHeader = styled(Typography)({
    display: 'flex',
    flexDirection: 'row',
    marginRight: '2vw',
    cursor: 'pointer',
    '&:hover': {
        textDecoration: 'underline',
    },
});

export const InfoLabel = styled(Typography)({
    fontSize: '1vw',
});

export const InfoValue = styled(Typography)({
    fontSize: '1vw',
    fontWeight: 'bold',
    marginLeft: '0.3vw',
});
