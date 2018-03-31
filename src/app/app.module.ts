import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {ToolbarModule} from './toolbar/toolbar.module';
import { NoteInputComponent } from './note-input/note-input.component';


@NgModule({
  declarations: [
    AppComponent,
    NoteInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
