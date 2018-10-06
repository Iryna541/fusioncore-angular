import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  TemplateRef
} from '@angular/core';

import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { InputBoolean } from '../core/util/convert';

import { ListSize, NzListGrid } from './interface';

@Component({
  selector           : 'nz-list',
  templateUrl        : './nz-list.component.html',
  providers          : [ NzUpdateHostClassService ],
  preserveWhitespaces: false,
  changeDetection    : ChangeDetectionStrategy.OnPush,
  styles             : [ `
    :host {
      display: block;
    }

    nz-spin {
      display: block;
    }
  ` ]
})
export class NzListComponent implements OnChanges {
  // #region fields
  // tslint:disable-next-line:no-any
  @Input() nzDataSource: any[] = [];

  @Input() @InputBoolean() nzBordered = false;

  @Input() nzGrid: NzListGrid;

  _isHeader = false;
  _header = '';
  _headerTpl: TemplateRef<void>;

  @Input()
  set nzHeader(value: string | TemplateRef<void>) {
    if (value instanceof TemplateRef) {
      this._header = null;
      this._headerTpl = value;
    } else {
      this._header = value;
    }

    this._isHeader = !!value;
  }

  _isFooter = false;
  _footer = '';
  _footerTpl: TemplateRef<void>;

  @Input()
  set nzFooter(value: string | TemplateRef<void>) {
    if (value instanceof TemplateRef) {
      this._footer = null;
      this._footerTpl = value;
    } else {
      this._footer = value;
    }

    this._isFooter = !!value;
  }

  @Input() nzItemLayout: 'vertical' | 'horizontal' = 'horizontal';

  @Input() nzRenderItem: TemplateRef<void>;

  @Input() @InputBoolean() nzLoading = false;

  @Input() nzLoadMore: TemplateRef<void>;

  @Input() nzPagination: TemplateRef<void>;

  @Input() nzSize: ListSize = 'default';

  @Input() @InputBoolean() nzSplit = true;

  // #endregion

  // #region styles

  private prefixCls = 'ant-list';

  private _setClassMap(): void {
    const classMap = {
      [ this.prefixCls ]                               : true,
      [ `${this.prefixCls}-vertical` ]                 : this.nzItemLayout === 'vertical',
      [ `${this.prefixCls}-lg` ]                       : this.nzSize === 'large',
      [ `${this.prefixCls}-sm` ]                       : this.nzSize === 'small',
      [ `${this.prefixCls}-split` ]                    : this.nzSplit,
      [ `${this.prefixCls}-bordered` ]                 : this.nzBordered,
      [ `${this.prefixCls}-loading` ]                  : this.nzLoading,
      [ `${this.prefixCls}-grid` ]                     : this.nzGrid,
      [ `${this.prefixCls}-something-after-last-item` ]: !!(this.nzLoadMore || this.nzPagination || this._isFooter)
    };
    this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
  }

  // #endregion

  constructor(private el: ElementRef, private cd: ChangeDetectorRef, private updateHostClassService: NzUpdateHostClassService) {
  }

  ngOnChanges(): void {
    this._setClassMap();
    // Delayed detection refresh limited by nz-spin, issues [#11280](https://github.com/angular/material2/issues/11280)
    setTimeout(() => this.cd.detectChanges());
  }
}
