import {
    gvActions
} from './actions'

const initialVariables = {
    userToken: null,
}

const gvReducers = (state = initialVariables, action) =>{
    switch (action.type) {
        case gvActions.PENDING: {
            return { ...state, loading: true };
        }
        case gvActions.SUCCESSFUL_USERTOKEN: {
            return { ...state, loading :false, userToken: action.payload };
        }
        default: {
            return state;
        }
    }
}

export{
    gvReducers
};

export{
    gvActions
};