import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentsRoutingModule } from './tournament-routing.module';
import { TournamentComponent } from './tournament.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IndexComponent } from './pages/index/index.component';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';
import { StoreModule } from '@ngrx/store';
import { TournamentReducer } from './states/tournament.reducers';
import { StatusToStringPipe } from './pipes/status-to-string.pipe';
import { DetailsComponent } from './pages/details/details.component';


@NgModule({
  declarations: [
    TournamentComponent,
    IndexComponent,
    AddComponent,
    EditComponent,
    StatusToStringPipe,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    TournamentsRoutingModule,
    SharedModule,
    StoreModule.forFeature('tournamentFeature', { tournamentState: TournamentReducer }),
  ]
})
export class TournamentModule { }
