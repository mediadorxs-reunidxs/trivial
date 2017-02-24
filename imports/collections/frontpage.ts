import { MongoObservable } from 'meteor-rxjs';
import { FrontpageChoice, FrontpageFeedback } from '../models';


export const FrontpageChoices = new MongoObservable.Collection<FrontpageChoice>('frontpageChoices');
export const FrontpageFeedbacks = new MongoObservable.Collection<FrontpageFeedback>('frontpageFeedbacks');
