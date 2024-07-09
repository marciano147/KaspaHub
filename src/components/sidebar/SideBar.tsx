// Sidebar.tsx

import React, { FC } from 'react';
import { TextField, Typography, Checkbox, FormControlLabel, Divider } from '@mui/material';
import { SidebarContainer } from './SideBar.s';
import { FilterOption } from '../../models/ResponseTypes';

interface SidebarProps {
    selectedFilters?: string[];
    onFilterChange?: (filter: string) => void;
    searchQuery?: string;
    onSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    filters?: FilterOption[];
}

const Sidebar: FC<SidebarProps> = (props) => {
    const { selectedFilters, onFilterChange, searchQuery, onSearchChange, filters } = props;

    return (
        <SidebarContainer>
            <Typography variant="h6">Filters</Typography>
            {filters.map((filter) => (
                <FormControlLabel
                    key={filter.value}
                    control={<Checkbox onChange={() => onFilterChange(filter.value)} />}
                    label={filter.label}
                />
            ))}
            <Divider />
            <TextField label="Search" variant="outlined" value={searchQuery} onChange={onSearchChange} fullWidth />
        </SidebarContainer>
    );
};

export default Sidebar;
