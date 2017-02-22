import { Component, OnInit } from '@angular/core';

import { FrontpageAnswers } from '../../../imports/collections/frontpage-answers';

import template from "./frontpage-answers.html";

@Component({
  selector: 'frontpage-answers',
  template
})
export class FrontpageAnswersComponent implements OnInit {

  answers;

  ngOnInit() {
    this.answers = FrontpageAnswers.find({});
  }


}
