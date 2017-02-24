import { Component, OnInit } from '@angular/core';

import { FrontpageChoices, FrontpageFeedbacks } from '../../../imports/collections/frontpage';

import template from "./frontpage-answers.html";

@Component({
  selector: 'frontpage-answers',
  template
})
export class FrontpageAnswersComponent implements OnInit {

  choices;
  feedbacks;

  ngOnInit() {
    this.choices = FrontpageChoices.find({});
    this.feedbacks = FrontpageFeedbacks.find({});
  }


}
