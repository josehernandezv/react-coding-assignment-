import * as actionTypes from '../actions/actionTypes';

const initialState = {
    properties: [],
    currentProperty: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PROPERTIES_LIST: return { ...state, properties: action.payload }
        case actionTypes.SET_PROPERTY: return { ...state, currentProperty: action.payload }
        default: return state
    }
}


export default reducer;