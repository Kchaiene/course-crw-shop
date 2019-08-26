import UserActionTypes from "./userTypesAction";


const initialState = {
    currentUser: null,
    error: null
};

const userReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case UserActionTypes.SIGN_UP_SUCCESS:
        case UserActionTypes.SIGN_IN_SUCCESS:
            console.log('userReducer', payload);
            return {
                ...state,
                currentUser: payload,
                error: null
            };
        case UserActionTypes.SIGN_OUT_SUCCESS:
            console.log('userReducer', payload);
            return {
                ...state,
                currentUser: null,
                error: null
            };
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: payload
            };

        default: return state;
    }
};


export default userReducer;

