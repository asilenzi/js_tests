import { Component, EventEmitter, Output } from '@angular/core';

import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  constructor(private usersServ: UsersService) {
  }

  ngOnInit(){
  }

  onSetToActive(id: number) {
    this.usersServ.setToActive(id);
  }
}
