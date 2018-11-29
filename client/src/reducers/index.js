import { combineReducers } from 'redux';
import flashcardset from './flashcardset';
import flash from './flash';

const rootReducer = combineReducers({
  flashcardset,
  flash,
});

export default rootReducer;
