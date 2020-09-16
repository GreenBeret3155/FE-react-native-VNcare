import { getQuanHeByBenhNhanId } from '../../services/fetchGET'

const benhnhanActions = {
    PENDING: 'FETCH_benhnhan_PENDING',
    FULFILLED: 'FETCH_benhnhan_FULFILLED',
    REJECTED: 'FETCH_benhnhan_REJECTED',
    SELECTED: 'SELECTED_benhnhan',
};

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

const initialState = {
    data: [],
    selected: null,
    loading: false,
    error: null,
};

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

export {
    benhnhanActions,
    fetchBenhnhans,
    benhnhanReducers,
    selectBenhnhan
};
