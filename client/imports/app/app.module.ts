import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { Trivial } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule
  ],
  declarations: [
    Trivial
  ],
  entryComponents: [
    Trivial
  ],
  bootstrap: [ Trivial ]
})

export class AppModule {}
