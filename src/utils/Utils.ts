export const getLocalDarkMode = () => {
    if (localStorage.getItem('dark_mode') !== null && localStorage.getItem('dark_mode') === 'true') {
        return true;
    }
    if (localStorage.getItem('dark_mode') !== null && localStorage.getItem('dark_mode') === 'false') {
        return false;
    }
    return true;
};
