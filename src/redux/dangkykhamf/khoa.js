import { getKhoaByCosoyteId } from '../../services/fetchGET'

const khoaActions = {
    PENDING: 'FETCH_khoa_PENDING',
    FULFILLED: 'FETCH_khoa_FULFILLED',
    REJECTED: 'FETCH_khoa_REJECTED',
    SELECTED: 'SELECTED_khoa'
};

const fetchKhoas = (cosoyteid) => (dispatch) => {
        dispatch({ type: khoaActions.PENDING });
        return getKhoaByCosoyteId(cosoyteid)
            .then(response => response.json())
            .then((json) => [{ "id": 0, "ten": '-- Chọn khoa khám bệnh --' }, ...json])
            .then(json => dispatch({ type: khoaActions.FULFILLED, payload: json }))
            .catch(error => dispatch({ type: khoaActions.REJECTED, payload: error }));
    };
const selectKhoa = (selected_khoa) => (dispatch) => {
    dispatch({ type: khoaActions.SELECTED, payload: selected_khoa })
}

const initialState = {
    data: [],
    selected: null,
    loading: false,
    error: null,
};

const khoaReducers = (state = initialState, action) =>{
    switch(action.type){
        case khoaActions.PENDING: {
            return {...state, loading: true};
        }
        case khoaActions.FULFILLED: {
            return {...state, loading: false, data: action.payload };
        }
        case khoaActions.REJECTED: {
            return {...state, loading: false, error: 'Đã xảy ra lỗi trong quá trình fetch dữ liệu từ API khoa'};
        }
        case khoaActions.SELECTED: {
            return {...state, selected: action.payload}
        }
        default: {
            return state;
        }
    }
}

export {
    khoaActions,
    fetchKhoas,
    selectKhoa,
    khoaReducers,
};
