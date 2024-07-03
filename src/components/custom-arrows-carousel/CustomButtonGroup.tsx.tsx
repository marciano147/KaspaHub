import React from 'react';

interface CustomButtonGroupProps {
    next: () => void;
    previous: () => void;
}

const CustomButtonGroup: React.FC<CustomButtonGroupProps> = ({ next, previous }) => (
    <div className="custom-button-group">
        <button onClick={previous}>Prev</button>
        <button onClick={next}>Next</button>
    </div>
);

export default CustomButtonGroup;
