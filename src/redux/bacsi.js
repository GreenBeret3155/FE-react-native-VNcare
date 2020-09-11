import { getBacSiByKhoaId } from '../services/fetchGET'

const bacsiActions = {
    PENDING: 'FETCH_bacsi_PENDING',
    FULFILLED: 'FETCH_bacsi_FULFILLED',
    REJECTED: 'FETCH_bacsi_REJECTED',
    SELECTED: 'SELECTED_bacsi'
};

const fetchBacsis = (khoaid) => (dispatch) => {
        dispatch({ type: bacsiActions.PENDING });
        return getBacSiByKhoaId(khoaid)
            .then(response => response.json())
            .then((json) => [{ "id": 0, "ten": '-- Chọn bác sĩ --' }, ...json])
            .then(json => dispatch({ type: bacsiActions.FULFILLED, payload: json }))
            .catch(error => dispatch({ type: bacsiActions.REJECTED, payload: error }));
    };
const selectBacsi = (selected_bacsi) => (dispatch) => {
    dispatch({ type: bacsiActions.SELECTED, payload: selected_bacsi })
}

const initialState = {
    data: [],
    selected: null,
    loading: false,
    error: null,
};

const bacsiReducers = (state = initialState, action) =>{
    switch(action.type){
        case bacsiActions.PENDING: {
            return {...state, loading: true};
        }
        case bacsiActions.FULFILLED: {
            return {...state, loading: false, data: action.payload };
        }
        case bacsiActions.REJECTED: {
            return {...state, loading: false, error: 'Đã xảy ra lỗi trong quá trình fetch dữ liệu từ API tỉnh'};
        }
        case bacsiActions.SELECTED: {
            return {...state, selected: action.payload}
        }
        default: {
            return state;
        }
    }
}

export {
    bacsiActions,
    fetchBacsis,
    selectBacsi,
    bacsiReducers,
};
