import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact';
import { Observable } from 'rxjs';
import { FilterBy } from 'src/app/models/filter-by.model';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  filterBy = { term: '' }
  // after loading contacts, and after every change  the observable gets loaded 
  // with the current contacts needed. and render the page.
  contacts$: Observable<Contact[]>
  selectedContactId: string = null

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    console.log('entered contact page');

    this.contacts$ = this.contactService.contacts$
    this.contactService.loadContacts()
  }


  onSetFilter(filterBy: FilterBy) {
    this.filterBy = filterBy
    this.contactService.loadContacts(this.filterBy)
  }
}