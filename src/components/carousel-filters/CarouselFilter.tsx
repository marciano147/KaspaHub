import React, { FC } from 'react';
import { FilterButton, FilterContainer } from './CarouselFilter.s';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import WalletRoundedIcon from '@mui/icons-material/WalletRounded';
import SwapVertRoundedIcon from '@mui/icons-material/SwapVertRounded';
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';
import IntegrationInstructionsRoundedIcon from '@mui/icons-material/IntegrationInstructionsRounded';

interface CarouselFilterProps {
    filterCategory: string;
    filterOptions: { label: string; value: string; data: any }[];
    setFilterCategory: (value: string) => void;
}

const iconMap = {
    apps: <AppsRoundedIcon />,
    wallets: <WalletRoundedIcon />,
    swaps: <SwapVertRoundedIcon />,
    exchanges: <CurrencyExchangeRoundedIcon />,
    thirdParty: <IntegrationInstructionsRoundedIcon />,
};

const CarouselFilter: FC<CarouselFilterProps> = (props) => {
    const { filterCategory, setFilterCategory, filterOptions } = props;
    return (
        <FilterContainer>
            {filterOptions.map((option) => (
                <FilterButton
                    key={option.value}
                    variant={filterCategory === option.value ? 'contained' : 'outlined'}
                    color="primary"
                    onClick={() => setFilterCategory(option.value)}
                    startIcon={iconMap[option.value] || null}
                >
                    {option.label}
                </FilterButton>
            ))}
        </FilterContainer>
    );
};
export default CarouselFilter;
