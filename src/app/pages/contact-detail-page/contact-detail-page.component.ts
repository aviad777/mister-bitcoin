import { Location } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Move } from 'src/app/models/move';
import { User } from 'src/app/services/user.model';
import { UserService } from 'src/app/services/user.service';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service'


@Component({
  selector: 'contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})
export class ContactDetailPageComponent implements OnInit {


  contact: Contact
  myProps: { 'id': string, 'name': string }
  subscription: Subscription
  moves: Move[]
  constructor(
    private contactService: ContactService,
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) { }

  async ngOnInit(): Promise<void> {

    this.subscription = this.route.params.subscribe(async params => {
      this.route.data.subscribe(data => this.contact = data.contact)
      this.myProps = { 'id': this.contact._id, 'name': this.contact.name }

    })
    if (this.userService.getUser()) {
      this.moves = this.userService.getUser().moves;

      // this.moves = this.moves.map((move) => move.toName === this.contact.name)
    } else
      this.moves = [];



  }
  onBack() {
    this.location.back();
  }

  async onDelete() {
    // contactService.deleteContact will return us the ID as observable than we change it to promise because
    // it is an async function and we want to wait for the ID to know the deletion is done
    // than we navigate home
    await this.contactService.deleteContact(this.contact._id).toPromise();
    this.router.navigateByUrl('/');

  }

  editContact() {

    // this.contactService.saveContact(this.contact);
  }
}
