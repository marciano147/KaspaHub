import React from 'react';
import { NextArrow } from './NextArrow';
import { PrevArrow } from './PrevArrow';

interface CustomButtonGroupProps {
    next: () => void;
    previous: () => void;
}

const CustomButtonGroup: React.FC<CustomButtonGroupProps> = ({ next, previous }) => (
    <>
        <PrevArrow onClick={previous} />
        <NextArrow onClick={next} />
    </>
);

export default CustomButtonGroup;
