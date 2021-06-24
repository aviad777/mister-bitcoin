import { Component, OnInit, Input, } from '@angular/core';
import { Move } from 'src/app/models/move';

@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})


export class MovesListComponent implements OnInit {
  @Input() moves: Move[]
  constructor() { }

  ngOnInit(): void {
  }

  trackByFn(index, item) {
    return item.id;
  }

}

