export interface Deal {
    title: string;
    price: number;
    creation: Date;
    expired: boolean;
    store_id: string;
    vote: number;

    description?: string;
    old_price?: number;
    sale_percent?: number;
    image_id?: string;
}
