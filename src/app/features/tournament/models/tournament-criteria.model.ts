import { CategoryEnum } from "../enums/category.enum";
import { StatusEnum } from "../enums/status.enum";

export interface TournamentCriteriaModel {
    offset: number;
    name: string|null;
    category: CategoryEnum|null;
    statuses: StatusEnum[];
    womenOnly: boolean;
}