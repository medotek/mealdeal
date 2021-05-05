export interface Source {
    fields:        string[];
    id:            string;
    images:        any[];
    import_t:      number;
    url:           null | string;
    manufacturer?: null;
    name?:         string;
}
