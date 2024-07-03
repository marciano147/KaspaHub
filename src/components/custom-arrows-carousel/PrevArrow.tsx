import React from 'react';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { ArrowButton } from './Arrows.s';
import { useTheme } from '@mui/material';

export const PrevArrow = ({ onClick }) => {
    const theme = useTheme();
    return (
        <ArrowButton onClick={onClick} style={{ left: '10px', borderColor: theme.palette.primary.main }}>
            <ArrowBackIosRoundedIcon />
        </ArrowButton>
    );
};
