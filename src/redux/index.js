import { combineReducers } from 'redux';
import { benhnhanReducers, 
    tinhReducers, 
    cosoyteReducers, 
    khoaReducers, 
    bacsiReducers,
    noidungkhamReducers,
    loaikhamReducers,
    thoigiankhamReducers,
    dangkykhamReducers
} from './dangkykham'
import {
    hosoReducers,
    hoso2Reducers
} from './hoso'

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
    dangkykham: dangkykhamReducers,
    hoso: hosoReducers,
    hoso2: hoso2Reducers
});

export default rootReducer;