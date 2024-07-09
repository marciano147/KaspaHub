import { Box } from '@mui/material';
import { styled } from '@mui/material';

export const SidebarContainer = styled(Box)({
    width: '250px',
    padding: '16px',
    borderRight: '1px solid #ddd',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
});
