import { NgModule, ErrorHandler } from '@angular/core';
import { Trivial } from './app.component';

@NgModule({
  declarations: [
    Trivial
  ],
  entryComponents: [
    Trivial
  ]
  /*
   * Needs a useFactory property
  providers: [
    { provide: ErrorHandler, useFactory: what }
  ]
  */
})

export class AppModule {}
