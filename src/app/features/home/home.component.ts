import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from 'src/app/shared/animations/fade.animation';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeAnimation]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
