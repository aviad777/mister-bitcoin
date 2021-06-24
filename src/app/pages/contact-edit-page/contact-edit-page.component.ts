import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {

  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) { }
  contact: Contact
  subscription: Subscription

  ngOnInit(): void {

    this.subscription = this.route.params.subscribe(async params => {
      this.route.data.subscribe(data => this.contact = data.contact)



      // const { id } = params;
      // console.log('id is:', id);
      // // @ts-ignore
      // this.contact = id ? await this.contactService.getContactById(id).toPromise() : this.contactService.getEmptyContact()
      // console.log('contact: ', this.contact, ' id:', id);

    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSaveContact() {
    console.log('at cotact edit page on save contact func', this.contact);
    this.contactService.saveContact(this.contact);
    this.router.navigateByUrl('/');
  }

}
