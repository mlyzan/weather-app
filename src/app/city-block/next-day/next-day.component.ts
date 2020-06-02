import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-next-day',
  templateUrl: './next-day.component.html',
  styleUrls: ['./next-day.component.scss']
})
export class NextDayComponent implements OnInit, OnDestroy {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    
  }
}
