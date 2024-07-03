import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apps from '../../mockdata/apps.json';
import exchanges from '../../mockdata/exchanges.json';
import wallets from '../../mockdata/wallets.json';
import thirdParty from '../../mockdata/thirdParty.json';
import swaps from '../../mockdata/swaps.json';
import { AppsScreenLayout } from './AppsScreenLayout';
import Header from '../../components/header/Header';

const dataMap = {
    apps,
    wallets: wallets.concat(thirdParty),
    trade: swaps.concat(exchanges),
};

interface AppsScreenProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
    kasMarketCap: number | null;
    kasPrice: number | null;
}

export const AppsScreen: FC<AppsScreenProps> = (props) => {
    const { darkMode, toggleDarkMode, kasMarketCap, kasPrice } = props;
    const { type } = useParams<{ type: string }>();
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCards, setFilteredCards] = useState(dataMap[type as keyof typeof dataMap] || []);

    useEffect(() => {
        let filteredData = dataMap[type as keyof typeof dataMap] || [];
        if (selectedFilters.length > 0) {
            filteredData = filteredData.filter((item) =>
                selectedFilters.some((filter) => filter === item.category),
            );
        }
        if (searchQuery) {
            filteredData = filteredData.filter((item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase()),
            );
        }
        setFilteredCards(filteredData);
    }, [selectedFilters, searchQuery, type]);

    const handleFilterChange = (filter: string) => {
        setSelectedFilters((prevFilters) =>
            prevFilters.includes(filter) ? prevFilters.filter((f) => f !== filter) : [...prevFilters, filter],
        );
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <AppsScreenLayout>
            <Sidebar
                filters={filters}
                selectedFilters={selectedFilters}
                onFilterChange={handleFilterChange}
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
            />
            <Header
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
                kasMarketCap={kasMarketCap}
                kasPrice={kasPrice}
            />
        </AppsScreenLayout>
    );
};
