import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from 'src/app/shared/animations/fade.animation';

@Component({
  selector: 'app-tournament',
  template: `<div style="height: 100%"  [@fadeAnimation]="outlet.isActivated ? outlet.activatedRoute : ''">
    <router-outlet #outlet="outlet"></router-outlet>
  </div>`,
  animations: [fadeAnimation]
})
export class TournamentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
