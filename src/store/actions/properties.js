import * as actionTypes from './actionTypes';
import axios from '../axios';

export const setProperties = (payload) => ({
    type: actionTypes.SET_PROPERTIES_LIST,
    payload
})

export const setProperty = (payload) => ({
    type: actionTypes.SET_PROPERTY,
    payload
})

export const fetchProperties = () => {
    return dispatch => {
        axios.get('search')
            .then(response => {
                dispatch(setProperties(response.data.results))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const fetchPropertyById = id => {
    return dispatch => {
        axios.get(`${id}`)
            .then(response => {
                dispatch(setProperty(response.data.results[0]))
            })
            .catch(err => {
                console.log(err)
            })
    }
}