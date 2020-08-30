import {
    ADD_PHOTO,
    GET_PHOTO,
    ERROR_PHOTO,
    SET_LOADING
} from '../actions/types';

import axios from 'axios';

export const getPhoto = (photo) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    try{
    const formData = new FormData();
    formData.append('photo', photo);
    const res = await axios.get('/photos', config, formData);
    dispatch({
        type: GET_PHOTO,
        payload: res.data
    })
    }
    catch(err){
    dispatch({
        type: ERROR_PHOTO,
        payload: err.response.data
    })
    }

 }


 export const addPhoto = (photo) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    try{
    const formData = new FormData();
    formData.append('photo', photo);
    const res = await axios.post('/photos', formData, config);
    dispatch({
        type: ADD_PHOTO,
        payload: res.data
    })
    }
    catch(err){
    dispatch({
        type: ERROR_PHOTO,
        payload: err.response.data
    })
    }

 }

 export const setLoading = () => {
    return{
        type: SET_LOADING
    }
}