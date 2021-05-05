import { AdjustmentsPackaging } from "./adjustments-packaging";
import { Agribalyse } from "./agribalyse";
import { Ies } from "./ies";
import { OriginsOfIngredients } from "./origins-of-ingredients";

export interface Adjustments {
    origins_of_ingredients: OriginsOfIngredients;
    packaging:              AdjustmentsPackaging;
    production_system:      Agribalyse;
    threatened_species:     Ies;
}
