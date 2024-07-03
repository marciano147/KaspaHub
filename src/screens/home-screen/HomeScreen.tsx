import React, { FC, useEffect, useState } from 'react';
import { getKasMarketCap, getKasPrice } from '../../DAL/server-requests/KasInfoDAL';
import { HomeScreenLayout } from './HomeScreenLayout';
import Header from '../../components/header/Header';
import { MainTitle } from '../../components/main-titile/MainTitle';
import apps from '../../mockdata/apps.json';
import CarouselFilter from '../../components/carousel-filters/CarouselFilter';
import allApps from '../../mockdata/allApps.json';
import exchanges from '../../mockdata/exchanges.json';
import wallets from '../../mockdata/wallets.json';
import thirdParty from '../../mockdata/thirdParty.json';
import swaps from '../../mockdata/swaps.json';
import Footer from '../../components/footer/Footer';
import { CardCarousel } from '../../components/carousel/Carousel';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface HomeScreenProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const filterOptions = [
    { label: 'All', value: 'all', data: allApps },
    { label: 'Apps', value: 'apps', data: apps },
    { label: 'Exchanges', value: 'exchanges', data: exchanges },
    { label: 'Wallets', value: 'wallets', data: wallets },
    { label: 'Third Party', value: 'thirdParty', data: thirdParty },
    { label: 'Swaps', value: 'swaps', data: swaps },
];

export const HomeScreen: FC<HomeScreenProps> = (props) => {
    const { darkMode, toggleDarkMode } = props;
    const [kasPrice, setKasPrice] = useState<number | null>(null);
    const [kasMarketCap, setKasMarketCap] = useState<number | null>(null);
    const [cards, setCards] = useState(allApps);
    const [filterCategory, setFilterCategory] = useState('all');

    useEffect(() => {
        getKasPrice().then((response) => {
            setKasPrice(response);
        });
        getKasMarketCap().then((response) => {
            setKasMarketCap(response);
        });
    }, []);

    useEffect(() => {
        const selectedOption = filterOptions.find((option) => option.value === filterCategory);
        if (selectedOption) {
            setCards(selectedOption.data);
        }
    }, [filterCategory]);

    return (
        <HomeScreenLayout>
            <Header
                kasMarketCap={kasMarketCap}
                kasPrice={kasPrice}
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />
            <MainTitle />
            <CarouselFilter
                filterCategory={filterCategory}
                setFilterCategory={setFilterCategory}
                filterOptions={filterOptions}
            />
            <CardCarousel cards={cards} darkMode={darkMode} />
            <Footer />
            <div />
        </HomeScreenLayout>
    );
};
