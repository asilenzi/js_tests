import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styles: [`
  .white {
    color: white
  }
  `]
})
export class SecretComponent implements OnInit {
  actionName : string;
  isReveal : boolean;
  actionsLog = [];

  constructor() { 
    this.isReveal = false;
    this.evaluateAction();
  }

  evaluateAction(): void {
    this.actionName = (!this.isReveal) ? "Reveal" : "Hide";
  }

  ngOnInit(): void {
  }
  
  getActionBackgroundColor(id): string {
    if (id > 4) {
      return 'blue';
    }
    return 'white';
  }

  onToggle(): void {
    const icount = this.actionsLog.length;
    this.actionsLog.push(
      { id: icount,
        action: this.actionName,
        time: Date()
    });
    this.isReveal = !this.isReveal;
    this.evaluateAction();
  }

}
