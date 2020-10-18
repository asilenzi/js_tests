import { Component, EventEmitter, Output } from '@angular/core';

import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[];

  constructor(private usersServ: UsersService) {
  }

  ngOnInit(){
    this.users = this.usersServ.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersServ.setToActive(id);
  }
}
