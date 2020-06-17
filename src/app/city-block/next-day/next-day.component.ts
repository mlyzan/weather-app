import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-next-day',
  templateUrl: './next-day.component.html',
  styleUrls: ['./next-day.component.scss']
})
export class NextDayComponent{
  @Input() data: any;
  constructor() { }
}
