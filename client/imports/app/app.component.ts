import { Component } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2';

import template from "./app.html";

@Component({
  selector: 'trivial',
  template
})
export class Trivial {
  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {}
}
