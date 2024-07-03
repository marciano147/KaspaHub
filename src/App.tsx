import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { darkTheme } from './theme/DarkTheme';
import { lightTheme } from './theme/LightTheme';
import { HomeScreen } from './screens/home-screen/HomeScreen';
import { useState } from 'react';
import { getLocalDarkMode } from './utils/Utils';
import { AppsScreen } from './screens/apps-screen/AppsScreen';

const App = () => {
    const [darkMode, setDarkMode] = useState(getLocalDarkMode());
    const toggleDarkMode = () => {
        const modeString = !darkMode ? 'true' : 'false';
        localStorage.setItem('dark_mode', modeString);
        setDarkMode(!darkMode);
    };

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeScreen darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
                    <Route path="/:type" element={<AppsScreen />} />
                    {/* Handle 404 - Not Found */}
                    <Route path="*" element={<div>404 - Not Found</div>} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
