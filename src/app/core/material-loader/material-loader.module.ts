import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatMenuModule, MatRadioModule, MatSelectModule, MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCardModule,
    MatMenuModule,
    MatDividerModule,
    MatExpansionModule,
  ],
  declarations: [],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCardModule,
    MatMenuModule,
    MatDividerModule,
    MatExpansionModule,
  ]
})
export class MaterialLoaderModule { }
