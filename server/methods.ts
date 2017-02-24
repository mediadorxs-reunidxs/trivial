import { Meteor } from 'meteor/meteor';

import { FrontpageAnswers } from '../imports/collections/frontpage-answers';

Meteor.methods({
  choose(id: string, product: string) {
    return {
      frontpageAnswerId: FrontpageAnswers.collection.insert({
        sessionId: id,
        product: product
      })
    }
  }
});
