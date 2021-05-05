import { Deal } from './../interfaces/deal';
export class DealPrototype implements Deal {
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

    constructor(
        title: string,
        price: number,
        creation: Date,
        expired: boolean,
        store_id: string,
        vote: number,
        description?: string,
        old_price?: number,
        sale_percent?: number,
        image_id?: string,
    ) {
        this.title = title;
        this.price = price;
        this.creation = creation;
        this.expired = expired;
        this.store_id = store_id;
        this.vote = vote;
        this.description = description; 
        this.old_price = old_price;
        this.sale_percent = sale_percent;
        this.image_id = image_id;
    }
}
