import React from 'react';
import { NextArrow } from './NextArrow';
import { PrevArrow } from './PrevArrow';

interface CustomButtonGroupProps {
    next: () => void;
    previous: () => void;
    theme: string;
}

const CustomButtonGroup: React.FC<CustomButtonGroupProps> = ({ next, previous, theme }) => (
    <>
        <PrevArrow onClick={previous} />
        <NextArrow onClick={next} />
    </>
);

export default CustomButtonGroup;
