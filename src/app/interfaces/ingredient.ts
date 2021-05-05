import { HasSubIngredients } from "../enum/has-sub-ingredients";

export interface Ingredient {
    has_sub_ingredients?: HasSubIngredients;
    id:                   string;
    percent_estimate:     number;
    percent_max:          number;
    percent_min:          number;
    rank?:                number;
    text:                 string;
    vegan?:               HasSubIngredients;
    vegetarian?:          HasSubIngredients;
    processing?:          string;
}
