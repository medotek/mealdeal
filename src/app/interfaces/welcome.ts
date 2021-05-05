import { Product } from "./product";

export interface Welcome {
    code:           string;
    product:        Product;
    status:         number;
    status_verbose: string;
}
