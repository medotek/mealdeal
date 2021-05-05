import { AggregatedOrigin } from "./aggregated-origin";

export interface OriginsOfIngredients {
    aggregated_origins:         AggregatedOrigin[];
    epi_score:                  number;
    epi_value:                  number;
    origins_from_origins_field: string[];
    transportation_score_be:    number;
    transportation_score_ch:    number;
    transportation_score_de:    number;
    transportation_score_es:    number;
    transportation_score_fr:    number;
    transportation_score_ie:    number;
    transportation_score_it:    number;
    transportation_score_lu:    number;
    transportation_score_nl:    number;
    transportation_value_be:    number;
    transportation_value_ch:    number;
    transportation_value_de:    number;
    transportation_value_es:    number;
    transportation_value_fr:    number;
    transportation_value_ie:    number;
    transportation_value_it:    number;
    transportation_value_lu:    number;
    transportation_value_nl:    number;
    value_be:                   number;
    value_ch:                   number;
    value_de:                   number;
    value_es:                   number;
    value_fr:                   number;
    value_ie:                   number;
    value_it:                   number;
    value_lu:                   number;
    value_nl:                   number;
}
