import { Component, Inject } from '@angular/core';
import { DialogData } from './dialog.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { interval } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  progressbarValue :number = 100;
  curSec: number = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public data:DialogData) { 
      if(data.hasCountdown && data.countdownDuration){
          this.startTimer(data.countdownDuration);
      }    
  }

  startTimer(seconds: number) {
    const timer$ = interval(1000);
    const sub = timer$.subscribe((sec) => {
      this.progressbarValue = 100 - sec * 100 / seconds;
      this.curSec = sec;
      if (this.curSec === seconds) {
        sub.unsubscribe();
      }
    });
  }

}
