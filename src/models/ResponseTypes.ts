export interface KasKRC20Info {
    message: string;
    result: {
        daaScore: number;
        opScore: number;
        opTotal: number;
        tokenTotal: number;
        feeTotal: number;
    };
}

export interface FilterOption {
    label: string;
    value: string;
}
