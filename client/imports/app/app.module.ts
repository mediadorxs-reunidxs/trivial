import 'hammerjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';

import { Trivial } from './app.component';
import { FrontpageComponent } from '../frontpage/frontpage.component';
import { FrontpageAnswersComponent } from '../frontpage/frontpage-answers.component';

const ROUTES: Routes = [
  { path: '', component: FrontpageComponent },
  { path: 'frontpage/answers', component: FrontpageAnswersComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(ROUTES),
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ])
  ],
  declarations: [
    Trivial,
    FrontpageComponent,
    FrontpageAnswersComponent
  ],
  entryComponents: [
    Trivial
  ],
  bootstrap: [ Trivial ]
})

export class AppModule {}
