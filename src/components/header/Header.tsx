import React from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import { IconButton, InputAdornment, TextField, Tooltip } from '@mui/material';
import { HeaderContainer, Logo, InfoSection, InfoLabel, InfoValue } from './Header.s';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
    kasMarketCap: number | null;
    kasPrice: number | null;
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
    const { kasPrice, kasMarketCap, darkMode, toggleDarkMode } = props;

    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(`/${path}`);
    };

    const formatCurrency = (value: number): string => `$${(value / 1e9).toFixed(2)}B`;

    const kasMarketCapFormatted = formatCurrency(kasMarketCap);
    const headerLogo = !darkMode
        ? 'https://kaspa.org/wp-content/uploads/2023/08/Kaspa-LDSP-Dark-Full-Color.svg'
        : 'https://kaspa.org/wp-content/uploads/2023/06/Kaspa-LDSP-Dark-Reverse.svg';

    return (
        <HeaderContainer>
            <Logo src={headerLogo} alt="Kaspa Logo" onClick={() => handleNavigation('home')} />
            <InfoSection>
                <InfoLabel>Market Cap: </InfoLabel>
                <InfoValue>{kasMarketCapFormatted}</InfoValue>
            </InfoSection>
            <InfoSection>
                <InfoLabel>Price: </InfoLabel>
                <InfoValue>{kasPrice}</InfoValue>
            </InfoSection>
            <InfoSection onClick={() => handleNavigation('wallets')}>
                <InfoLabel>Wallets</InfoLabel>
            </InfoSection>
            <InfoSection onClick={() => handleNavigation('faucets')}>
                <InfoLabel>Faucets</InfoLabel>
            </InfoSection>
            <InfoSection onClick={() => handleNavigation('apps')}>
                <InfoLabel>Apps</InfoLabel>
            </InfoSection>
            <InfoSection onClick={() => handleNavigation('trade')}>
                <InfoLabel>Trade</InfoLabel>
            </InfoSection>
            <TextField
                type="search"
                placeholder={'Search App'}
                value={''}
                sx={{
                    marginLeft: 'auto',
                    '& input': {
                        fontSize: '1vw',
                    },
                    '& input::placeholder': {
                        fontSize: '1vw',
                    },
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchRoundedIcon sx={{ fontSize: '2vh' }} />
                        </InputAdornment>
                    ),
                    style: {
                        height: '3.5vh',
                        width: '10vw',
                    },
                }}
            />
            {darkMode ? (
                <Tooltip title={'Light Mode'} placement="bottom">
                    <IconButton sx={{ padding: '4px' }} onClick={toggleDarkMode}>
                        <LightModeRoundedIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title={'Dark Mode'} placement="bottom">
                    <IconButton sx={{ padding: '4px' }} onClick={toggleDarkMode}>
                        <NightlightRoundIcon />
                    </IconButton>
                </Tooltip>
            )}
        </HeaderContainer>
    );
};

export default Header;
