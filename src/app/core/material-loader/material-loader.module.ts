import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule,
  MatIconModule,
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
    MatGridListModule,
    MatButtonModule,
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
    MatGridListModule,
    MatButtonModule,
  ]
})
export class MaterialLoaderModule { }
