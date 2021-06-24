import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'transfer-funds',
  templateUrl: './transfer-funds.component.html',
  styleUrls: ['./transfer-funds.component.scss']
})
export class TransferFundsComponent implements OnInit {
  @Input() props: { 'id': string, 'name': string }
  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }

  onSaveForm(form) {

    console.log('props', this.props);

    // console.log('hello', form.value.amount);
    this.userService.onTransferCoins(this.props.id, this.props.name, form.value.amount);
    form.reset();
  }

}
