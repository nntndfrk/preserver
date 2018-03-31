import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ViewSwitcherComponent } from './view-switcher/view-switcher.component';
import { ToolbarMenuComponent } from './toolbar-menu/toolbar-menu.component';
import {CoreModule} from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [BreadcrumbsComponent, ViewSwitcherComponent, ToolbarMenuComponent],
  exports: [
    BreadcrumbsComponent,
    ViewSwitcherComponent,
    ToolbarMenuComponent
  ]
})
export class SharedModule { }
