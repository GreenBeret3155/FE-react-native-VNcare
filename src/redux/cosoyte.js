import { getCosoyteByTinhId } from '../services/fetchGET'

const cosoyteActions = {
    PENDING: 'FETCH_cosoyte_PENDING',
    FULFILLED: 'FETCH_cosoyte_FULFILLED',
    REJECTED: 'FETCH_cosoyte_REJECTED',
    SELECTED: 'SELECTED_cosoyte'
};

const fetchCosoytes = (tinhid) => (dispatch) => {
        dispatch({ type: cosoyteActions.PENDING });
        return getCosoyteByTinhId(tinhid)
            .then(response => response.json())
            .then((json) => [{ "id": 0, "ten": '-- Chọn bệnh viện --' }, ...json])
            .then(json => dispatch({ type: cosoyteActions.FULFILLED, payload: json }))
            .catch(error => dispatch({ type: cosoyteActions.REJECTED, payload: error }));
    };
const selectCosoyte = (selected_cosoyte) => (dispatch) => {
    dispatch({ type: cosoyteActions.SELECTED, payload: selected_cosoyte })
}

const initialState = {
    data: [],
    selected: null,
    loading: false,
    error: null,
};

const cosoyteReducers = (state = initialState, action) =>{
    switch(action.type){
        case cosoyteActions.PENDING: {
            return {...state, loading: true};
        }
        case cosoyteActions.FULFILLED: {
            return {...state, loading: false, data: action.payload };
        }
        case cosoyteActions.REJECTED: {
            return {...state, loading: false, error: 'Đã xảy ra lỗi trong quá trình fetch dữ liệu từ API tỉnh'};
        }
        case cosoyteActions.SELECTED: {
            return {...state, selected: action.payload}
        }
        default: {
            return state;
        }
    }
}

export {
    cosoyteActions,
    fetchCosoytes,
    selectCosoyte,
    cosoyteReducers,
};
