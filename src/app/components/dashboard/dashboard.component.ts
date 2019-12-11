import { Component, OnInit } from '@angular/core';
import { TimeInterval, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;
  progressInterval: TimeInterval<number>;

  ngOnInit() {
    this.updateProgress();
  }

  updateProgress() {
    setInterval(() => {
      if (this.value < 100) {
        this.value = this.value + 5;
      }
    }, 2000);    
  }

}
