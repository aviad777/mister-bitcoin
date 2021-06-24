import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})


export class HomePageComponent implements OnInit {
  user: User
  bitcoinVal$: Observable<Object>
  // rate: any = 0;
  // contacts: any = [];
  // marketPrice: any = null;
  constructor(private userService: UserService, private bitcoinService: BitcoinService, private contactService: ContactService) {

  }
  // observable not working
  async ngOnInit(): Promise<void> {
    if (localStorage.getItem('BitAppcurUser')) {
      this.user = JSON.parse(localStorage.getItem('BitAppcurUser'))
    } else {
      this.user = await this.userService.getUser();
    }
    console.log('user at home', this.user);

    this.bitcoinVal$ = this.bitcoinService.getRate()
  }


  // this.user = this.userService.getUser();
  // this.rate = this.bitcoinService.getRate();
  // this.bitcoinService.getMarketPrice().subscribe(res => this.marketPrice = res);

  // console.log('user: ', this.user, ' marketPrice: ', this.marketPrice, ' rate: ', this.rate);
}

