import { Meteor } from 'meteor/meteor';

import { FrontpageAnswers } from '../imports/collections/frontpage-answers';

Meteor.methods({
  choose(product: string) {
    return {
      frontpageAnswerId: FrontpageAnswers.collection.insert({
        product: product
      })
    }
  }
});
