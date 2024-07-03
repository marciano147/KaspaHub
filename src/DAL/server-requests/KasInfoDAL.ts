import { KasKRC20Info } from '../../models/ResponseTypes';
import { KRC20InfoService, kasInfoService } from './AxiosInstances';

// example to server request by the axios instances
export const getKasKRC20Info = async (): Promise<KasKRC20Info> => {
    try {
        const response = await KRC20InfoService.get<KasKRC20Info>(`info`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const getKasMarketCap = async (): Promise<number> => {
    try {
        const response = await kasInfoService.get<any>(`info/marketcap?stringOnly=false`);
        return response.data.marketcap;
    } catch (error) {
        throw error;
    }
};
export const getKasPrice = async (): Promise<number> => {
    try {
        const response = await kasInfoService.get<any>(`info/price`);
        return response.data.price;
    } catch (error) {
        throw error;
    }
};
