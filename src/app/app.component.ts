import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  startTimeInSeconds = 30;
  intervalId: number = 0;
  constructor() {
this.startTimerFrom30Seconds()
  }
 public stopTimer() {
   clearInterval(this.intervalId)
 }

  public startTimerFrom30Seconds() {
    this.intervalId = window.setInterval(() => {
      this.startTimeInSeconds = this.startTimeInSeconds-1;
      if(this.startTimeInSeconds === 0) {
        this.stopTimer();
      } else {
        if(this.startTimeInSeconds < 0) {
          this.startTimeInSeconds = 30;
        }
      }
    },1000)
  }


  close() {
    this.startTimerFrom30Seconds()
  }

  start() {
    this.startTimerFrom30Seconds();
  }

  cli() {
    this.stopTimer()
    this.startTimeInSeconds = 30;
    this.startTimerFrom30Seconds()
  }
  
}
