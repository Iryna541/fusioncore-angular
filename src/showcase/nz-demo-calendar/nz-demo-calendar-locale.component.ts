import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nz-demo-calendar-locale',
  template: `
    <nz-calendar [nzLocale]="'en'"></nz-calendar>`,
  styles  : []
})
export class NzDemoCalendarLocaleComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}

