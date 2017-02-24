import { Meteor } from 'meteor/meteor';

import { FrontpageChoices, FrontpageFeedbacks } from '../imports/collections/frontpage';

Meteor.methods({
  choose(id: string, product: string) {
    return {
      frontpageAnswerId: FrontpageChoices.collection.insert({
        sessionId: id,
        product: product
      })
    }
  },

  feedback(id: string, email: string, comments: string) {
    return {
      frontpageAnswerId: FrontpageFeedbacks.collection.insert({
        sessionId: id,
        email: email,
        comments: comments
      })
    }
  }
});
