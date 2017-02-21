import 'hammerjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';

import { Trivial } from './app.component';
import { FrontpageComponent } from '../frontpage/frontpage.component';

const ROUTES: Routes = [
  { path: '', component: FrontpageComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(ROUTES),
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ])
  ],
  declarations: [
    Trivial,
    FrontpageComponent
  ],
  entryComponents: [
    Trivial
  ],
  bootstrap: [ Trivial ]
})

export class AppModule {}
