import { IconButton, styled } from '@mui/material';

export const ArrowButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    border: `1px solid ${theme.palette.primary.main}`,
    top: '72%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(112, 199, 186, 0.5)',
    '&:hover': {
        backgroundColor: 'rgba(112, 199, 186, 0.7)',
    },
    zIndex: 1,
    width: '7vh',
    height: '7vh',
}));
