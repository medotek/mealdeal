import { Adjustments } from "./adjustments";
import { Agribalyse } from "./agribalyse";
import { Missing } from "./missing";

export interface EcoscoreData {
    adjustments:                      Adjustments;
    agribalyse:                       Agribalyse;
    missing:                          Missing;
    missing_agribalyse_match_warning: number;
    status:                           string;
}
