export interface Deal {
    title?: string;
    product_sku?: string; //code-barre
    price?: number;
    creation?: Date;
    expired?: boolean;
    store_id?: string;
    vote?: number;

    description?: string;
    old_price?: number;
    sale_percent?: number;
    image_id?: string;
}
