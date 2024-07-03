import axios from 'axios';

// you will need to add .env with `REACT_APP_ENDPOINT` etc

export const backendServiceInstance = axios.create({
    baseURL: process.env.REACT_APP_ENDPOINT,
});

export const KRC20InfoService = axios.create({
    baseURL: 'https://tn11api.kasplex.org/v1',
});

export const kasInfoService = axios.create({
    baseURL: 'https://api.kaspa.org/',
});
