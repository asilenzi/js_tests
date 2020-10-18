import { ConstantPool } from '@angular/compiler';
import { Component, OnInit} from '@angular/core';

import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  users: string[];

  constructor(private usersServ: UsersService) {
  }

  ngOnInit(){
    this.users = this.usersServ.activeUsers;
    console.log(this.users);
  }

  onSetToInactive(id: number) {
    this.usersServ.setToInactive(id);
  }
}
