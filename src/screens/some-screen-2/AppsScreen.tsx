import { Card } from '@mui/material';
import { FC } from 'react';
import { AppsScreenLayout } from './AppsScreenLayout';

interface AppsScreenProps {
    someProps: number;
}

export const AppsScreen: FC<AppsScreenProps> = (props) => <AppsScreenLayout />;
