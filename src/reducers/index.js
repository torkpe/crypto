import { combineReducers } from 'redux';
import { cryptos } from './crypto.reducer';

const rootReducer = combineReducers({
  cryptos
});

export default rootReducer;