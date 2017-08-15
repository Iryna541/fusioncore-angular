import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nz-demo-layout-top',
  template: `
    <nz-layout class="layout">
      <nz-header>
        <div class="logo"></div>
        <ul nz-menu [nzTheme]="'dark'" [nzMode]="'horizontal'" style="line-height: 64px;">
          <li nz-menu-item>nav 1</li>
          <li nz-menu-item>nav 2</li>
          <li nz-menu-item>nav 3</li>
        </ul>
      </nz-header>
      <nz-content style="padding:0 50px;">
        <nz-breadcrumb style="margin:12px 0;">
          <nz-breadcrumb-item>Home</nz-breadcrumb-item>
          <nz-breadcrumb-item>List</nz-breadcrumb-item>
          <nz-breadcrumb-item>App</nz-breadcrumb-item>
        </nz-breadcrumb>
        <div style="background:#fff; padding: 24px; min-height: 280px;">Content</div>
      </nz-content>
      <nz-footer style="text-align: center;">Ant Design ©2017 Implement By Angular</nz-footer>
    </nz-layout>
  `,
  styles  : [
      `:host ::ng-deep .logo {
      width: 120px;
      height: 31px;
      background: #333;
      border-radius: 6px;
      margin: 16px 24px 16px 0;
      float: left;
    }
    `
  ]
})
export class NzDemoLayoutTopComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
