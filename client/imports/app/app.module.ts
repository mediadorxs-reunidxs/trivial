import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Trivial } from './app.component';

@NgModule({
  imports: [
    BrowserModule
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
