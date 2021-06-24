import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from './contact.model';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root'
})


// resolver operates before the route happens and can be a place to connect different services
// as loaders, messages. and it simplifies our App


export class ContactResolverService implements Resolve<Observable<Contact>> {

  constructor(private contactService: ContactService) { }
  resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params;
    if (id)
      return this.contactService.getContactById(id);
    else
      return this.contactService.getEmptyContact();
  }
}
