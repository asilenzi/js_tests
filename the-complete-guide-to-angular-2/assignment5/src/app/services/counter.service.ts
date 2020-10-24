import {EventEmitter, Injectable} from '@angular/core';

import {CounterModel} from '../models/counter.model';

@Injectable({providedIn: "root"})
export class CounterService {
    update: EventEmitter<void>;

    constructor(public model: CounterModel) {
        this.update = new EventEmitter();
    }

    countActive() : void {
        this.model.active++;
        this.update.emit();
    }

    countInactive() : void {
        this.model.inactive++;
        this.update.emit();
    }
}
