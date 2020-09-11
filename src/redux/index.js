import { combineReducers } from 'redux';
import { benhnhanReducers } from './benhnhan'
import { tinhReducers } from './tinh'

// Root Reducer
const rootReducer = combineReducers({
    benhnhans: benhnhanReducers,
    tinhs: tinhReducers
});

export default rootReducer;