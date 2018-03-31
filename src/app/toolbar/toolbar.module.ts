import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import {CoreModule} from '../core/core.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ],
  declarations: [ToolbarComponent],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule { }
