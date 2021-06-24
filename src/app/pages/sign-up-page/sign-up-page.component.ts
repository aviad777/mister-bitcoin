import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {
  userName: string = ''
  constructor(private userService: UserService) {
  }
  ngOnInit(): void {
    console.log('new copy: ', this.userName);
  }

  onSubmit(): void {
    this.userService.newUser(this.userName);
  }
}
