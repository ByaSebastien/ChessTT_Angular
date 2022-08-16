import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpUtils } from 'src/app/core/utils/http.utils';
import { environment } from 'src/environments/environment';
import { TournamentCriteriaModel } from '../models/tournament-criteria.model';
import { TournamentFormModel } from '../models/tournament-form.model';
import { TournamentModel } from '../models/tournament.model';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  get(criteria: TournamentCriteriaModel): Observable<{ total: number, tournaments: TournamentModel[] }> {
    const params = HttpUtils.createHttpParams(criteria);
    return this._httpClient.get<TournamentModel[]>(environment.apiBaseUrl + '/tournament', { params, observe: 'response' }).pipe(
      map(response => ({
        tournaments: response.body ?? [],
        total: HttpUtils.getTotal(response.headers),
        criteria,
      }))
    );
  }

  add(tournament: TournamentFormModel): Observable<void> {
    return this._httpClient.post<void>(environment.apiBaseUrl + '/tournament', tournament);
  }

  delete(id: string): Observable<void> {
    return this._httpClient.delete<void>(environment.apiBaseUrl + '/tournament/' + id);
  }
}
