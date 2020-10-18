import {EventEmitter, Injectable} from '@angular/core';

@Injectable({providedIn: "root"})
export class CounterService {
    sum: number = 0;
    new_number: EventEmitter<number>;
    
    constructor() {
        this.new_number = new EventEmitter<number>();
    }

    count() : void {
        this.sum++;
        const new_ = this.sum;
        this.new_number.emit(new_);
    }
}
