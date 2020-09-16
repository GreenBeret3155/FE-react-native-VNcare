import { getAllTinh } from '../../services/fetchGET'

const tinhActions = {
    PENDING: 'FETCH_tinh_PENDING',
    FULFILLED: 'FETCH_tinh_FULFILLED',
    REJECTED: 'FETCH_tinh_REJECTED',
    SELECTED: 'SELECTED_tinh'
};

const fetchTinhs = () => (dispatch) => {
    dispatch({ type: tinhActions.PENDING })
    return getAllTinh()
        .then(response => response.json())
        .then(json => [{ "id": 0, "ten": '-- Chọn tỉnh --' }, ...json])
        .then(json => dispatch({ type: tinhActions.FULFILLED, payload: json }))
        .catch(error => dispatch({ type: tinhActions.REJECTED, payload: error }))
};

const selectTinh = (selected_tinh) => (dispatch) => {
    dispatch({ type: tinhActions.SELECTED, payload: selected_tinh })
}

const initialState = {
    data: [], 
    selected: null,
    loading: false,
    error: null,
};

const tinhReducers = (state = initialState, action) => {
    switch (action.type) {
        case tinhActions.PENDING: {
            return { ...state, loading: true};
        }
        case tinhActions.FULFILLED: {
            return { ...state, loading: false, data: action.payload };
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

export {
    tinhActions,
    fetchTinhs,
    selectTinh,
    tinhReducers,
};
