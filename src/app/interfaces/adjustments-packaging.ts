import { PackagingPackaging } from "./packaging-packaging";

export interface AdjustmentsPackaging {
    non_recyclable_and_non_biodegradable_materials: number;
    packagings:                                     PackagingPackaging[];
    score:                                          number;
    value:                                          number;
    warning:                                        string;
}
