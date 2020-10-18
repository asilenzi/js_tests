import {EventEmitter, Injectable} from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({providedIn: "root"})
export class UsersService{
    activeUsers: string[];

    inactiveUsers: string [];


    constructor(private counter: CounterService) {
        this.activeUsers = ['Max', 'Anna'];
        this.inactiveUsers = ['Chris', 'Manu'];
    }

    setToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counter.count();
    }
    
    setToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counter.count();
    }
    
}
