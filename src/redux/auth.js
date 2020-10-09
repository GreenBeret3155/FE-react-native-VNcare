import { signInHandler } from '../services/authHandler'
import {
    signinActions
} from './actions'

const initialState = {
    userToken: null,
    loading: false,
};

const signinHandler = (username,password) => async (dispatch) => {
    dispatch({type: signinActions.PENDING});
    await signInHandler(username,password)
        .then( json => {
            if (typeof json.error != "undefined") {
                console.log('Error', json.error_description);
            } else {
                dispatch({type: signinActions.SUCCESSFUL, payload: json })
            }
        })
}

const signinReducers = (state = initialState, action) => {
    switch (action.type) {
        case signinActions.PENDING: {
            return { ...state, loading: true };
        }
        case signinActions.SUCCESSFUL: {
            return { ...state, loading :false , userToken: action.payload.access_token };
        }
        default: {
            return state;
        }
    }
}

export {
    signinReducers
};

export{
    signinHandler
};