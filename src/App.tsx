import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { darkTheme } from './theme/DarkTheme';
import { lightTheme } from './theme/LightTheme';
import { HomeScreen } from './screens/home-screen/HomeScreen';
import { useEffect, useState } from 'react';
import { getLocalDarkMode } from './utils/Utils';
import { AppsScreen } from './screens/apps-screen/AppsScreen';
import { getKasPrice, getKasMarketCap } from './DAL/server-requests/KasInfoDAL';

const App = () => {
    const [darkMode, setDarkMode] = useState(getLocalDarkMode());
    const [kasPrice, setKasPrice] = useState<number | null>(null);
    const [kasMarketCap, setKasMarketCap] = useState<number | null>(null);
    const toggleDarkMode = () => {
        const modeString = !darkMode ? 'true' : 'false';
        localStorage.setItem('dark_mode', modeString);
        setDarkMode(!darkMode);
    };
    useEffect(() => {
        getKasPrice().then((response) => {
            setKasPrice(response);
        });
        getKasMarketCap().then((response) => {
            setKasMarketCap(response);
        });
    }, []);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <HomeScreen
                                darkMode={darkMode}
                                toggleDarkMode={toggleDarkMode}
                                kasMarketCap={kasMarketCap}
                                kasPrice={kasPrice}
                            />
                        }
                    />
                    <Route
                        path="/:type"
                        element={
                            <AppsScreen
                                darkMode={darkMode}
                                toggleDarkMode={toggleDarkMode}
                                kasMarketCap={kasMarketCap}
                                kasPrice={kasPrice}
                            />
                        }
                    />
                    {/* Handle 404 - Not Found */}
                    <Route path="*" element={<div>404 - Not Found</div>} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
