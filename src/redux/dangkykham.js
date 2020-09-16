import {
    getAllTinh,
    getCosoyteByTinhId,
    getBacSiByKhoaId,
    getKhoaByCosoyteId,
    getQuanHeByBenhNhanId
} from '../services/fetchGET'
import { loaiKham } from '../services/mockedData';

// initialState
const initialState = {
    data: [],
    selected: {},
    loading: false,
    error: null,
};

const initialState2 = {
    selected: {},
}

const tinhActions = {
    PENDING: 'FETCH_tinh_PENDING',
    FULFILLED: 'FETCH_tinh_FULFILLED',
    DELETE: 'FETCH_tinh_DELETE',
    REJECTED: 'FETCH_tinh_REJECTED',
    SELECTED: 'SELECTED_tinh'
};
const cosoyteActions = {
    PENDING: 'FETCH_cosoyte_PENDING',
    FULFILLED: 'FETCH_cosoyte_FULFILLED',
    DELETE: 'FETCH_cosoyte_DELETE',
    REJECTED: 'FETCH_cosoyte_REJECTED',
    SELECTED: 'SELECTED_cosoyte'
};
const khoaActions = {
    PENDING: 'FETCH_khoa_PENDING',
    FULFILLED: 'FETCH_khoa_FULFILLED',
    DELETE: 'FETCH_khoa_DELETE',
    REJECTED: 'FETCH_khoa_REJECTED',
    SELECTED: 'SELECTED_khoa'
};
const bacsiActions = {
    PENDING: 'FETCH_bacsi_PENDING',
    FULFILLED: 'FETCH_bacsi_FULFILLED',
    DELETE: 'FETCH_bacsi_DELETE',
    REJECTED: 'FETCH_bacsi_REJECTED',
    SELECTED: 'SELECTED_bacsi'
};

const benhnhanActions = {
    PENDING: 'FETCH_benhnhan_PENDING',
    FULFILLED: 'FETCH_benhnhan_FULFILLED',
    REJECTED: 'FETCH_benhnhan_REJECTED',
    SELECTED: 'SELECTED_benhnhan',
};

const thoigiankhamActions = {
    SELECTED: 'SELECTED_ngaykham',
};

const noidungkhamActions = {
    SELECTED: 'SELECTED_noidungkham',
};

const loaikhamActions = {
    SELECTED: 'SELECTED_loaikham',
};

//benh nhan
const fetchBenhnhans = () => (dispatch) => {
    dispatch({ type: benhnhanActions.PENDING });
    return getQuanHeByBenhNhanId(1)
        .then(response => response.json())
        .then(json => dispatch({ type: benhnhanActions.FULFILLED, payload: json }))
        .catch(error => dispatch({ type: benhnhanActions.REJECTED, payload: error }));
};

const selectBenhnhan = (selected_benhnhan) => (dispatch) => {
    dispatch({ type: benhnhanActions.SELECTED, payload: selected_benhnhan })
}

const benhnhanReducers = (state = initialState, action) => {
    switch (action.type) {
        case benhnhanActions.PENDING: {
            return { ...state, loading: true };
        }
        case benhnhanActions.FULFILLED: {
            return { ...state, loading: false, data: action.payload };
        }
        case benhnhanActions.REJECTED: {
            return { ...state, loading: false, error: 'Đã xảy ra lỗi trong quá trình fetch dữ liệu từ API' };
        }
        case benhnhanActions.SELECTED: {
            return { ...state, selected: action.payload };
        }
        default: {
            return state;
        }
    }
}

// tinh
const fetchTinhs = () => (dispatch) => {
    dispatch({ type: tinhActions.PENDING })
    return getAllTinh()
        .then(response => response.json())
        .then(json => [{ "id": 0, "ten": '-- Chọn tỉnh --' }, ...json])
        .then(json => dispatch({ type: tinhActions.FULFILLED, payload: json }))
        .catch(error => dispatch({ type: tinhActions.REJECTED, payload: error }))
}
const deleteTinh = () => (dispatch) =>{
    dispatch({type: tinhActions.DELETE})
}

const selectTinh = (selected_tinh) => (dispatch) => {
    dispatch({ type: tinhActions.SELECTED, payload: selected_tinh })
}

const tinhReducers = (state = initialState, action) => {
    switch (action.type) {
        case tinhActions.PENDING: {
            return { ...state, loading: true };
        }
        case tinhActions.FULFILLED: {
            return { ...state, loading: false, data: action.payload };
        }
        case tinhActions.DELETE: {
            return { ...state, loading: false, data: [], selected: {} };
        }
        case tinhActions.REJECTED: {
            return { ...state, loading: false, error: 'Đã xảy ra lỗi trong quá trình fetch dữ liệu từ API tỉnh' };
        }
        case tinhActions.SELECTED: {
            return { ...state, selected: action.payload }
        }
        default: {
            return state;
        }
    }
}

// cosoyte
const fetchCosoytes = (tinhid) => (dispatch) => {
    dispatch({ type: cosoyteActions.PENDING });
    return getCosoyteByTinhId(tinhid)
        .then(response => response.json())
        .then((json) => [{ "id": 0, "ten": '-- Chọn bệnh viện--' }, ...json])
        .then(json => dispatch({ type: cosoyteActions.FULFILLED, payload: json }))
        .catch(error => dispatch({ type: cosoyteActions.REJECTED, payload: error }));
}
const deleteCosoyte = ()=> (dispatch) =>{
    dispatch({ type: cosoyteActions.DELETE})
}

const selectCosoyte = (selected_cosoyte) => (dispatch) => {
    dispatch({ type: cosoyteActions.SELECTED, payload: selected_cosoyte })
}


const cosoyteReducers = (state = initialState, action) => {
    switch (action.type) {
        case cosoyteActions.PENDING: {
            return { ...state, loading: true };
        }
        case cosoyteActions.FULFILLED: {
            return { ...state, loading: false, data: action.payload };
        }
        case cosoyteActions.DELETE: {
            return { ...state, loading: false, data: [], selected: {} };
        }
        case cosoyteActions.REJECTED: {
            return { ...state, loading: false, error: 'Đã xảy ra lỗi trong quá trình fetch dữ liệu từ API tỉnh' };
        }
        case cosoyteActions.SELECTED: {
            return { ...state, selected: action.payload }
        }
        default: {
            return state;
        }
    }
}

//khoa
const fetchKhoas = (cosoyteid) => (dispatch) => {
    dispatch({ type: khoaActions.PENDING });
    return getKhoaByCosoyteId(cosoyteid)
        .then(response => response.json())
        .then((json) => [{ "id": 0, "ten": '-- Chọn khoa khám bệnh --' }, ...json])
        .then(json => dispatch({ type: khoaActions.FULFILLED, payload: json }))
        .catch(error => dispatch({ type: khoaActions.REJECTED, payload: error }));
}
const deleteKhoa = () => (dispatch) =>{
    dispatch({type: khoaActions.DELETE})
}
const selectKhoa = (selected_khoa) => (dispatch) => {
    dispatch({ type: khoaActions.SELECTED, payload: selected_khoa })
}

const khoaReducers = (state = initialState, action) => {
    switch (action.type) {
        case khoaActions.PENDING: {
            return { ...state, loading: true };
        }
        case khoaActions.FULFILLED: {
            return { ...state, loading: false, data: action.payload };
        }
        case khoaActions.DELETE: {
            return { ...state, loading: false, data: [], selected: {} };
        }
        case khoaActions.REJECTED: {
            return { ...state, loading: false, error: 'Đã xảy ra lỗi trong quá trình fetch dữ liệu từ API khoa' };
        }
        case khoaActions.SELECTED: {
            return { ...state, selected: action.payload }
        }
        default: {
            return state;
        }
    }
}

// bacsi
const fetchBacsis = (khoaid) => (dispatch) => {
    dispatch({ type: bacsiActions.PENDING });
    return getBacSiByKhoaId(khoaid)
        .then(response => response.json())
        .then((json) => [{ "id": 0, "ten": '-- Chọn bác sĩ --' }, ...json])
        .then(json => dispatch({ type: bacsiActions.FULFILLED, payload: json }))
        .catch(error => dispatch({ type: bacsiActions.REJECTED, payload: error }));
};
const deleteBacsi = () => (dispatch) =>{
    dispatch({type: bacsiActions.DELETE})
}
const selectBacsi = (selected_bacsi) => (dispatch) => {
    dispatch({ type: bacsiActions.SELECTED, payload: selected_bacsi })
}


const bacsiReducers = (state = initialState, action) => {
    switch (action.type) {
        case bacsiActions.PENDING: {
            return { ...state, loading: true };
        }
        case bacsiActions.FULFILLED: {
            return { ...state, loading: false, data: action.payload };
        }
        case bacsiActions.DELETE: {
            return { ...state, loading: false, data: [], selected: {} };
        }
        case bacsiActions.REJECTED: {
            return { ...state, loading: false, error: 'Đã xảy ra lỗi trong quá trình fetch dữ liệu từ API bác sĩ' };
        }
        case bacsiActions.SELECTED: {
            return { ...state, selected: action.payload }
        }
        default: {
            return state;
        }
    }
}


//noi dung kham
const selectNoidungkham = (noidung) => (dispatch) => {
    dispatch({ type: noidungkhamActions.SELECTED, payload: noidung })
}


const noidungkhamReducers = (state = initialState2, action) => {
    switch (action.type) {
        case noidungkhamActions.SELECTED: {
            return {...state, selected: action.payload }
        }
        default: {
            return state;
        }
    }
}

//ngay kham
const selectThoigiankham = (thoigiankham) => (dispatch) => {
    dispatch({ type: thoigiankhamActions.SELECTED, payload: thoigiankham })
}


const thoigiankhamReducers = (state = initialState2, action) => {
    switch (action.type) {
        case thoigiankhamActions.SELECTED: {
            return {...state, selected: action.payload }
        }
        default: {
            return state;
        }
    }
}

//loai kham
const selectLoaikham = (loaikham) => (dispatch) => {
    console.log(loaikham)
    dispatch({ type: loaikhamActions.SELECTED, payload: loaikham })
}


const loaikhamReducers = (state = initialState2, action) => {
    switch (action.type) {
        case loaikhamActions.SELECTED: {
            return { selected: action.payload }
        }
        default: {
            return state;
        }
    }
}

export{
    benhnhanReducers,
    tinhReducers,
    cosoyteReducers,
    khoaReducers,
    bacsiReducers,
    thoigiankhamReducers,
    loaikhamReducers,
    noidungkhamReducers
};

export {
    fetchBenhnhans,
    selectBenhnhan,
    fetchTinhs,
    selectTinh,
    deleteTinh,
    deleteCosoyte,
    fetchCosoytes,
    selectCosoyte,
    fetchKhoas,
    selectKhoa,
    deleteKhoa,
    fetchBacsis,
    selectBacsi,
    deleteBacsi,
    selectThoigiankham,
    selectLoaikham,
    selectNoidungkham,
};
