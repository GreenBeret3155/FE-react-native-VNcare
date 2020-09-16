import { combineReducers } from 'redux';
import { benhnhanReducers, 
    tinhReducers, 
    cosoyteReducers, 
    khoaReducers, 
    bacsiReducers,
    noidungkhamReducers,
    loaikhamReducers,
    thoigiankhamReducers
} from './dangkykham'

// Root Reducer
const rootReducer = combineReducers({
    benhnhans: benhnhanReducers,
    tinhs: tinhReducers,
    cosoytes: cosoyteReducers,
    khoas: khoaReducers,
    bacsis: bacsiReducers,
    noidungkham: noidungkhamReducers,
    thoigiankham: thoigiankhamReducers,
    loaikham: loaikhamReducers,
});

export default rootReducer;