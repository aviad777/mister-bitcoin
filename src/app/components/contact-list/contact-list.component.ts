import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactService } from '../../services/contact.service'
import { Contact } from 'src/app/services/contact.model';


@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Contact[]
  constructor() { }

  ngOnInit(): void {

  }

  trackByFn(index, item) {
    return item.id;
  }

}
