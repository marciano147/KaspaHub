import { FC } from 'react';
import { useParams } from 'react-router-dom';
import apps from '../../mockdata/apps.json';
import exchanges from '../../mockdata/exchanges.json';
import wallets from '../../mockdata/wallets.json';
import thirdParty from '../../mockdata/thirdParty.json';
import swaps from '../../mockdata/swaps.json';
import { AppsScreenLayout } from './AppsScreenLayout';

const dataMap = {
    apps,
    wallets: [wallets, thirdParty],
    trade: [swaps, exchanges],
};

export const AppsScreen: FC = () => {
    const { type } = useParams<{ type: string }>();
    const cards = dataMap[type as keyof typeof dataMap];

    return <AppsScreenLayout />;
};
