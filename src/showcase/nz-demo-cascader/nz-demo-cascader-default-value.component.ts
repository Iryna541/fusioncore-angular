import {Component, OnInit} from '@angular/core';

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
      isLeaf: true
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
      isLeaf: true
    }],
  }],
}];


@Component({
  selector: 'nz-demo-cascader-default-value',
  template: `
    <nz-cascader
      [nzOptions]="_options"
      [(ngModel)]="_value"
      (ngModelChange)="_console($event)"
      (nzChange)="_console($event)">
    </nz-cascader>`,
  styles  : []
})
export class NzDemoCascaderDefaultValueComponent implements OnInit {
  /** init data */
  _options = options;

  /* _value: any[] = ['zhejiang', 'hangzhou', 'xihu']; */
  /* or like this: */
  _value: any[] = [{
    value: 'zhejiang',
    label: 'Zhejiang'
  }, {
    value: 'hangzhou',
    label: 'Hangzhou'
  }, {
    value: 'xihu',
    label: 'West Lake'
  }];

  _console(value) {
    console.log(value);
  }

  constructor() {
  }

  ngOnInit() {
  }
}

