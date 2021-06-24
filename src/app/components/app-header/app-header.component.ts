import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  // event emitter on the app.component html. gets the click to select the page


  constructor() { }

  ngOnInit(): void {
  }

}
