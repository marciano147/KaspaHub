import React from 'react';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { ArrowButton } from './Arrows.s';
import { useTheme } from '@mui/material';

export const NextArrow = ({ onClick }) => {
    const theme = useTheme();
    return (
        <ArrowButton onClick={onClick} style={{ right: '10px', borderColor: theme.palette.primary.main }}>
            <ArrowForwardIosRoundedIcon />
        </ArrowButton>
    );
};
