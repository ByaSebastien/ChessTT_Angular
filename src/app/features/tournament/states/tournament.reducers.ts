import { createAction, createReducer, on, props } from "@ngrx/store";
import { TournamentCriteriaModel } from "../models/tournament-criteria.model";

export interface tournamentState {
    searchCriteria: TournamentCriteriaModel
}

export const changeCriteria = createAction('[tournament] change page', props<{criteria: TournamentCriteriaModel}>());
export const changePage = createAction('[tournament] change page', props<{offset: number}>());

const initialState = <tournamentState>{ searchCriteria: { offset: 0, name: null } };

export const TournamentReducer = createReducer(
    initialState,
    on(changeCriteria, (state, {criteria}) => ({ 
        ...state,
        searchCriteria: { ...state.searchCriteria, ...criteria },
    })),
    on(changePage, (state, {offset}) => ({ 
        ...state,
        searchCriteria: { ...state.searchCriteria, offset: offset },
    })),
);