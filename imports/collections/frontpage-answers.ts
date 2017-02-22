import { MongoObservable } from 'meteor-rxjs';
import { FrontpageAnswer } from '../models';


export const FrontpageAnswers = new MongoObservable.Collection<FrontpageAnswer>('frontpageAnswer');
